import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Redirigir a login si no está autenticado e intenta acceder a rutas protegidas
  if (!user && request.nextUrl.pathname.startsWith("/dashboard")) {
    const url = request.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  // Restricciones de acceso basadas en el tipo de cuenta
  if (user) {
    const accountType = user.user_metadata.account_type;
    const path = request.nextUrl.pathname;

    // Redirigir a client dashboard si el usuario es cliente e intenta acceder a la ruta de provider
    if (accountType === "client" && path.startsWith("/dashboard/provider")) {
      const url = request.nextUrl.clone();
      url.pathname = "/dashboard/client";
      return NextResponse.redirect(url);
    }

    // Redirigir a provider dashboard si el usuario es proveedor e intenta acceder a la ruta de cliente
    if (
      ["business", "individual-free", "individual-pro"].includes(accountType) &&
      path.startsWith("/dashboard/client")
    ) {
      const url = request.nextUrl.clone();
      url.pathname = "/dashboard/provider";
      return NextResponse.redirect(url);
    }

    // Si accede a /dashboard, redirigir a la ruta específica según el tipo de usuario
    if (path === "/dashboard") {
      const url = request.nextUrl.clone();
      if (accountType === "client") {
        url.pathname = "/dashboard/client";
      } else if (
        ["business", "individual-free", "individual-pro"].includes(accountType)
      ) {
        url.pathname = "/dashboard/provider";
      } else {
        // Si no tiene un tipo de cuenta válido, redirigir a account-setup
        url.pathname = "/dashboard/account-setup";
      }
      return NextResponse.redirect(url);
    }

    // Prevenir acceso a account-setup si ya tiene un tipo de cuenta válido
    if (
      path.startsWith("/dashboard/account-setup") &&
      (accountType === "client" ||
        ["business", "individual-free", "individual-pro"].includes(accountType))
    ) {
      const url = request.nextUrl.clone();
      url.pathname =
        accountType === "client" ? "/dashboard/client" : "/dashboard/provider";
      return NextResponse.redirect(url);
    }
  }

  // Redirigir a dashboard específico si está autenticado e intenta acceder a auth o página de inicio
  if (
    user &&
    (request.nextUrl.pathname.startsWith("/auth") ||
      request.nextUrl.pathname === "/")
  ) {
    const url = request.nextUrl.clone();
    const accountType = user.user_metadata.account_type;

    if (accountType === "client") {
      url.pathname = "/dashboard/client";
    } else if (
      ["business", "individual-free", "individual-pro"].includes(accountType)
    ) {
      url.pathname = "/dashboard/provider";
    } else {
      // Si no tiene un tipo de cuenta válido, redirigir a account-setup
      url.pathname = "/dashboard/account-setup";
    }

    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
