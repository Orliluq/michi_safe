// src/services/authService.ts
// Servicio de autenticación para login, registro y Google

export async function loginWithEmail(email: string, password: string) {
  // Aquí deberías hacer la llamada real a tu backend
  // Simulación: acepta cualquier usuario y devuelve un token
  if (email && password) {
    // Simula un token JWT
    return { token: "fake-jwt-token", provider: "credentials" };
  }
  throw new Error("Credenciales inválidas");
}

export async function registerWithEmail(name: string, email: string, password: string) {
  // Aquí deberías hacer la llamada real a tu backend
  if (name && email && password) {
    return { success: true };
  }
  throw new Error("Datos inválidos");
}

export async function loginWithGoogle() {
  // Aquí deberías integrar Google Sign-In real
  // Simulación: abre popup y retorna token
  // En producción, usa Firebase Auth o Google Identity Services
  return new Promise<{ token: string; provider: string }>((resolve) => {
    setTimeout(() => {
      resolve({ token: "fake-google-token", provider: "google" });
    }, 1000);
  });
}

export function logout() {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("auth_provider");
}

export function saveAuth(token: string, provider: string) {
  localStorage.setItem("auth_token", token);
  localStorage.setItem("auth_provider", provider);
}

export function isAuthenticated() {
  return Boolean(localStorage.getItem("auth_token"));
}
