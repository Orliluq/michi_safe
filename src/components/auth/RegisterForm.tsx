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
import { registerWithEmail } from "@/services/authService";
import { Link } from "react-router-dom";

const passwordSchema = z
  .string()
  .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
  .regex(/[A-Z]/, { message: "Debe contener al menos una letra mayúscula" })
  .regex(/[a-z]/, { message: "Debe contener al menos una letra minúscula" })
  .regex(/[0-9]/, { message: "Debe contener al menos un número" })
  .regex(/[^A-Za-z0-9]/, {
    message: "Debe contener al menos un carácter especial",
  });

const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "El nombre debe tener al menos 2 caracteres.",
    }),
    email: z.string().email("Por favor ingresa un correo electrónico válido"),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await registerWithEmail(values.name, values.email, values.password);
      toast({
        title: "¡Registro exitoso!",
        description:
          "Tu cuenta ha sido creada correctamente. Por favor inicia sesión.",
      });
      window.location.href = "/login";
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Hubo un error al crear tu cuenta. Por favor, intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Crear Cuenta
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Ingresa tus datos para crear una cuenta
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre Completo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Tu nombre"
                      type="text"
                      autoComplete="name"
                      disabled={isLoading}
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="tucorreo@ejemplo.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      disabled={isLoading}
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="••••••••"
                      type="password"
                      autoComplete="new-password"
                      disabled={isLoading}
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <div className="mt-2 text-xs text-muted-foreground">
                    <p className="mb-2">La contraseña debe contener:</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      <div className="flex items-start">
                        <span
                          className={
                            field.value?.length >= 8
                              ? "text-green-500"
                              : "text-muted-foreground"
                          }
                        >
                          • Al menos 8 caracteres
                        </span>
                      </div>
                      <div className="flex items-start">
                        <span
                          className={
                            /[A-Z]/.test(field.value || "")
                              ? "text-green-500"
                              : "text-muted-foreground"
                          }
                        >
                          • Una letra mayúscula
                        </span>
                      </div>
                      <div className="flex items-start">
                        <span
                          className={
                            /[a-z]/.test(field.value || "")
                              ? "text-green-500"
                              : "text-muted-foreground"
                          }
                        >
                          • Una letra minúscula
                        </span>
                      </div>
                      <div className="flex items-start">
                        <span
                          className={
                            /[0-9]/.test(field.value || "")
                              ? "text-green-500"
                              : "text-muted-foreground"
                          }
                        >
                          • Un número
                        </span>
                      </div>
                      <div className="flex items-start col-span-2">
                        <span
                          className={
                            /[^A-Za-z0-9]/.test(field.value || "")
                              ? "text-green-500"
                              : "text-muted-foreground"
                          }
                        >
                          • Un carácter especial (ej: !@#$%^&*)
                        </span>
                      </div>
                    </div>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmar Contraseña</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="••••••••"
                      type="password"
                      autoComplete="new-password"
                      disabled={isLoading}
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-start space-x-2">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  required
                />
              </div>
              <div className="text-sm leading-5">
                <label htmlFor="terms" className="font-medium text-foreground">
                  Acepto los{" "}
                  <a href="/terms" className="text-primary hover:text-foreground">
                    Términos de Servicio
                  </a>{" "}
                  y la{" "}
                  <a href="/privacy" className="text-primary hover:text-foreground">
                    Política de Privacidad
                  </a>
                </label>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full h-11 text-sm sm:text-base font-medium"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creando cuenta...
                </>
              ) : (
                "Crear Cuenta"
              )}
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">O continúa con</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full h-11 text-sm sm:text-base"
              disabled={isLoading}
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
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
              Google
            </Button>
          </form>
        </Form>

        <footer className="text-center pt-4 sm:pt-6">
          <p className="text-sm sm:text-base text-foreground/80">
            ¿Ya tienes una cuenta?{" "}
            <Link
              to="/login"
              className="text-primary hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1 py-0.5 font-medium transition-colors duration-200"
              aria-label="Iniciar sesión"
            >
              Inicia Sesión
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
