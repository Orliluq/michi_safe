import { runFlow } from '@genkit-ai/flow';
import { encontrarMiGatitoFlow } from '../genkit/flows/encontrarGatito.flow';
import '../genkit/index'; // Importa para asegurar que la configuración de Genkit se cargue

async function ejecutarPrueba() {
  console.log("Ejecutando prueba del flujo para encontrar mi gatito...");
  
  const resultado = await runFlow(encontrarMiGatitoFlow, {
    gatito: {
      descripcion: "Es un gato naranja atigrado, con la punta de la cola blanca y ojos verdes.",
      colorPrincipal: "Naranja",
      raza: "Mestizo",
    },
    ultimaUbicacionConocida: "Colonia Tovar, Miranda",
    // Para la prueba, usamos una URL de imagen que sabemos que coincidirá con nuestros datos de prueba
    fotoGatitoPerdidoUrl: "https://i.imgur.com/LkyJc6E.jpeg", 
  });

  console.log("\n--- RESULTADO FINAL DEL FLUJO (ALERTAS) ---\n");
  if (resultado.length > 0) {
    console.log(JSON.stringify(resultado, null, 2));
  } else {
    console.log("No se encontraron coincidencias de alta confianza.");
  }
}

ejecutarPrueba().catch(console.error);