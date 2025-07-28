import { configureGenkit } from '@genkit-ai/core';
import { googleAI } from '@genkit-ai/googleai';
import { defineFlow, startFlowsServer } from '@genkit-ai/flow';
import cors from 'cors';

configureGenkit({
  plugins: [googleAI()],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
  // Habilita que los flujos se expongan como endpoints de API
  flowStateStore: 'firebase', // o 'dotfile' para desarrollo local
  traceStore: 'firebase', // o 'dotfile' para desarrollo local
});

// Habilita el servidor de flujos con CORS
startFlowsServer({
  // Permite peticiones desde el servidor de desarrollo de Vite
  cors: { origin: 'http://localhost:5173' }
});


// Exporta tus flujos y herramientas
export * from './flows/encontrarGatito.flow';
export * from './tools/busquedaRedesSociales.tool';