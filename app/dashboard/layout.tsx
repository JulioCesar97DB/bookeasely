import { UserProvider } from "@/lib/context/user-context";
import { createClient } from "@/lib/supabase/server";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <UserProvider initialUser={user}>{children}</UserProvider>;
}
