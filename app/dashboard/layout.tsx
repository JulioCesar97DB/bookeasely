"use client";

import { UserProvider } from "@/lib/context/user-context";
import { Suspense } from "react";
import { Loading } from "@/components/common/Loading";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </UserProvider>
  );
}
