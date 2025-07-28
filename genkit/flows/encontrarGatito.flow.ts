import { ai, z } from '@genkit-ai/core'; // <-- 'ai' se queda aquí
import { defineFlow, run } from '@genkit-ai/flow'; // <-- CORREGIDO
import { buscarPublicacionesDeGatitos } from '../tools/busquedaRedesSociales.tool';
import { ReportePerdidoSchema, ResultadoCoincidenciaSchema, AnalisisCoincidenciaSchema } from '../schemas/gatito.schema';

export const encontrarMiGatitoFlow = defineFlow(
  {
    name: 'encontrarMiGatitoFlow',
    inputSchema: ReportePerdidoSchema,
    outputSchema: z.array(ResultadoCoincidenciaSchema),
  },
  async (reporte) => {
    console.log("Iniciando flujo para encontrar gatito perdido:", reporte.gatito.descripcion);

    const publicacionesEncontradas = await run('buscar-publicaciones', async () => {
      return buscarPublicacionesDeGatitos(reporte.ultimaUbicacionConocida);
    });

    const publicaciones = Array.isArray(publicacionesEncontradas) ? publicacionesEncontradas : [];

    const coincidencias = await Promise.all(
      publicaciones.map(async (publicacion) => {
        const peticionAnalisis = await generate({
          model: 'gemini-1.5-flash',
          prompt: `
            Eres un experto en reconocimiento de mascotas. Tu tarea es comparar dos imágenes de gatitos y determinar si son el mismo animal.
            GATITO PERDIDO:
            - Descripción: ${reporte.gatito.descripcion}, color ${reporte.gatito.colorPrincipal}.
            - Ubicación: ${reporte.ultimaUbicacionConocida}.

            GATITO ENCONTRADO:
            - Descripción en la publicación: ${publicacion.descripcionPublicacion}.
            - Ubicación del hallazgo: ${publicacion.ubicacionTexto}.

            Analiza las dos imágenes adjuntas y responde únicamente con el formato JSON solicitado.
          `,
          input: [
            { text: "Imagen del gatito perdido:" },
            { media: { url: reporte.fotoGatitoPerdidoUrl } },
            { text: "Imagen del gatito encontrado:" },
            { media: { url: publicacion.fotoUrl } },
          ],
          output: {
            schema: AnalisisCoincidenciaSchema,
          },
          config: {
            temperature: 0.2,
          },
        });

        const analisis = peticionAnalisis.text();
        if (analisis?.esCoincidencia) {
          console.log(`Posible coincidencia encontrada (${analisis.confianza}%): ${publicacion.urlPublicacion}`);
          return { publicacion, analisisIA: analisis };
        }
        return null;
      })
    );
    
    // Filtrar nulos y coincidencias con baja confianza
    return coincidencias.filter((c): c is NonNullable<typeof c> => c !== null && c.analisisIA.confianza > 80);
  }
);