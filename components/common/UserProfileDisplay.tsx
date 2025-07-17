"use client";

import { useUser } from "@/lib/context/user-context";

export default function UserProfileDisplay() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div className="text-muted-foreground">Cargando información de usuario...</div>;
  }

  if (!user) {
    return <div className="text-muted-foreground">Usuario no autenticado</div>;
  }

  return (
    <div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
      <h3 className="font-semibold mb-2 text-lg">Perfil de Usuario</h3>
      <div className="space-y-2">
        <p><span className="font-medium">ID:</span> {user.id}</p>
        <p><span className="font-medium">Email:</span> {user.email}</p>
        <p><span className="font-medium">Tipo de cuenta:</span> {user.user_metadata?.account_type || "No especificado"}</p>
        {user.user_metadata?.firstName && (
          <p><span className="font-medium">Nombre:</span> {user.user_metadata.firstName} {user.user_metadata.lastName || ""}</p>
        )}
      </div>
    </div>
  );
}
