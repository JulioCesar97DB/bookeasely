import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function ClientDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) {
    redirect("/auth/login");
  }
  
  const accountType = session.user.user_metadata.account_type;
  
  if (accountType !== "client") {
    redirect("/dashboard"); 
  }
  
  return <>{children}</>;
}
