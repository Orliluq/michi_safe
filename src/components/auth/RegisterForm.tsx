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
                  <a href="/terms" className="text-primary hover:underline">
                    Términos de Servicio
                  </a>{" "}
                  y la{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    Política de Privacidad
                  </a>
                </label>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 h-11 mt-2"
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
          </form>
        </Form>
        <p className="text-center text-sm text-muted-foreground">
          ¿Ya tienes una cuenta?{" "}
          <Link
            to="/login"
            className="font-medium text-primary hover:underline"
          >
            Inicia Sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
