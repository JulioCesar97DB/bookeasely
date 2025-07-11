"use client";

import BaseRegistrationPage from "@/components/auth/BaseRegistrationPage";
import ClientForm from "@/components/auth/ClientForm";
import { accountConfigs } from "@/components/auth/registration-configs";

export default function ClientRegisterPage() {
  const config = accountConfigs.client;

  return (
    <BaseRegistrationPage config={config}>
      <ClientForm 
        buttonGradient={config.buttonGradient}
        buttonHoverGradient={config.buttonHoverGradient}
        linkColor={config.linkColor}
      />
    </BaseRegistrationPage>
  );
}
