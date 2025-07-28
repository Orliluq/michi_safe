import { z } from 'zod';

// Representa las características de un gatito
export const GatitoSchema = z.object({
  descripcion: z.string().describe("Descripción física detallada: patrones, marcas únicas, etc."),
  raza: z.string().optional().describe("Raza del gatito, si se conoce."),
  colorPrincipal: z.string().describe("El color predominante del pelaje."),
});

// Simula una publicación encontrada en redes sociales
export const PublicacionEncontradoSchema = z.object({
  urlPublicacion: z.string().url().describe("URL directa a la publicación en la red social."),
  ubicacionTexto: z.string().describe("Texto de la ubicación donde fue visto (ej. 'cerca del Parque Central')."),
  fotoUrl: z.string().url().describe("URL de la imagen del gatito encontrado."),
  descripcionPublicacion: z.string().describe("Texto original de la publicación."),
});

// El reporte completo que un usuario envía cuando pierde a su gatito
export const ReportePerdidoSchema = z.object({
  gatito: GatitoSchema,
  ultimaUbicacionConocida: z.string().describe("Última dirección o área donde se vio al gatito."),
  fotoGatitoPerdidoUrl: z.string().url().describe("URL de una foto clara del gatito perdido."),
});

// El esquema para la salida estructurada de la IA
export const AnalisisCoincidenciaSchema = z.object({
  esCoincidencia: z.boolean().describe("True si el gatito de la publicación es el mismo que el perdido, False en caso contrario."),
  confianza: z.number().min(0).max(100).describe("Nivel de confianza de la coincidencia (0-100)."),
  justificacion: z.string().describe("Explicación detallada de por qué se considera (o no) una coincidencia."),
});

// El resultado final que se envía como alerta al usuario
export const ResultadoCoincidenciaSchema = z.object({
  publicacion: PublicacionEncontradoSchema,
  analisisIA: AnalisisCoincidenciaSchema,
});