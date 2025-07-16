import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function ProviderDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/auth/login");
  }

  const accountType = session.user.user_metadata.account_type;

  if (
    !["business", "individual-free", "individual-pro"].includes(accountType)
  ) {
    redirect("/dashboard");
  }

  return <>{children}</>;
}
