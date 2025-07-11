"use client";

import BaseRegistrationPage from "@/components/auth/BaseRegistrationPage";
import IndividualForm from "@/components/auth/IndividualForm";
import { accountConfigs } from "@/components/auth/registration-configs";
import { useSearchParams } from "next/navigation";
import { accountTypes } from "@/constants";

export default function IndividualRegisterPage() {
  const searchParams = useSearchParams();
  const accountType = searchParams.get("type");
  
  // Determinar qué configuración usar basado en el tipo
  const configKey = accountType === accountTypes.INDIVIDUAL_FREE ? "individualFree" : "individual";
  const config = accountConfigs[configKey];

  return (
    <BaseRegistrationPage config={config}>
      <IndividualForm 
        buttonGradient={config.buttonGradient}
        buttonHoverGradient={config.buttonHoverGradient}
        linkColor={config.linkColor}
        accountType={accountType || undefined}
      />
    </BaseRegistrationPage>
  );
}
