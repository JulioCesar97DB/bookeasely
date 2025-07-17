import { Suspense } from "react";
import { Loading } from "@/components/common/Loading";

export default async function ProviderDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
