"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { logout } from "@/app/auth/actions";
import UserProfileDisplay from "@/components/common/UserProfileDisplay";

export default function AccountSetupPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="text-destructive h-5 w-5" />
            Configuración de cuenta requerida
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            {error === "account-type-undefined"
              ? "No pudimos determinar el tipo de tu cuenta. Es posible que tu perfil no esté correctamente configurado en el sistema."
              : "Tu cuenta requiere configuración adicional antes de continuar."}
          </p>
          <p className="text-muted-foreground text-sm mb-4">
            Por favor, ponte en contacto con soporte técnico para resolver este
            problema, o intenta cerrar sesión y volver a iniciarla.
          </p>
          
          <div className="mt-6 border-t pt-4">
            <h3 className="font-medium mb-2">Información de tu cuenta:</h3>
            <UserProfileDisplay />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={async () => {
              await logout();
            }}
          >
            Cerrar sesión
          </Button>
          <Button
            className="w-full sm:w-auto"
            onClick={() => (window.location.href = "/support")}
          >
            Contactar soporte
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
