import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import {
  loginWithEmail,
  loginWithGoogle,
  saveAuth,
} from "@/services/authService";
import { Link } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email("Por favor ingresa un correo electrónico válido"),
  password: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres.",
  }),
});

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const res = await loginWithEmail(values.email, values.password);
      saveAuth(res.token, res.provider);
      toast({
        title: "¡Bienvenido de nuevo!",
        description: "Has iniciado sesión correctamente.",
      });
      window.location.href = "/";
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Hubo un error al iniciar sesión. Por favor, intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGoogleLogin() {
    setIsLoading(true);
    try {
      const res = await loginWithGoogle();
      saveAuth(res.token, res.provider);
      toast({
        title: "¡Bienvenido con Google!",
        description: "Has iniciado sesión correctamente.",
      });
      window.location.href = "/";
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo iniciar sesión con Google.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl space-y-6 sm:space-y-8">
        <header className="text-center space-y-2 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Iniciar Sesión
          </h1>
          <p className="text-sm sm:text-base text-foreground/80 px-2">
            Ingresa tus credenciales para acceder a tu cuenta
          </p>
        </header>
        <div className="bg-card border border-border rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 sm:space-y-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base font-medium">
                      Correo Electrónico
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="tucorreo@ejemplo.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={isLoading}
                        className="h-10 sm:h-11 lg:h-12 text-sm sm:text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs sm:text-sm" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <FormLabel className="text-sm sm:text-base font-medium">
                        Contraseña
                      </FormLabel>
                      <Link
                        to="/forgot-password"
                        className="text-xs sm:text-sm font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1 py-0.5"
                        aria-label="Recuperar contraseña olvidada"
                      >
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </div>
                    <FormControl>
                      <Input
                        placeholder="••••••••"
                        type="password"
                        autoComplete="current-password"
                        disabled={isLoading}
                        className="h-10 sm:h-11 lg:h-12 text-sm sm:text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs sm:text-sm" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 h-10 sm:h-11 lg:h-12 text-sm sm:text-base text-primary-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200"
                disabled={isLoading}
                aria-describedby={isLoading ? "loading-status" : undefined}
              >
                {isLoading ? (
                  <>
                    <Loader2
                      className="mr-2 h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                    <span id="loading-status">Iniciando sesión...</span>
                  </>
                ) : (
                  "Iniciar Sesión"
                )}
              </Button>
            </form>
          </Form>
        </div>
        <div className="relative my-4 sm:my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs sm:text-sm uppercase">
            <span className="bg-background px-3 sm:px-4 text-foreground/70 font-medium">
              O CONTINÚA CON
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <Button
            variant="outline"
            type="button"
            disabled={isLoading}
            onClick={handleGoogleLogin}
            className="h-10 sm:h-11 lg:h-12 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 hover:bg-accent/50"
            aria-label="Iniciar sesión con Google"
          >
            <svg
              className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0"
              viewBox="0 0 24 24"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="truncate">Google</span>
          </Button>
          <Button
            variant="outline"
            type="button"
            disabled={isLoading}
            className="h-10 sm:h-11 lg:h-12 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 hover:bg-accent/50"
            aria-label="Iniciar sesión con LinkedIn"
          >
            <svg
              className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
            </svg>
            <span className="truncate">LinkedIn</span>
          </Button>
        </div>

        <footer className="text-center pt-4 sm:pt-6">
          <p className="text-sm sm:text-base text-foreground/80">
            ¿No tienes una cuenta?{" "}
            <Link
              to="/register"
              className="text-primary hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1 py-0.5 font-medium transition-colors duration-200"
              aria-label="Crear nueva cuenta"
            >
              Regístrate
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
