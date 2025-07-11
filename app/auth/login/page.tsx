"use client";

import BaseRegistrationPage from "@/components/auth/BaseRegistrationPage";
import LoginForm from "@/components/auth/LoginForm";
import { accountConfigs } from "@/components/auth/registration-configs";

export default function LoginPage() {
  const config = accountConfigs.login;

  return (
    <BaseRegistrationPage config={config}>
      <LoginForm 
        buttonGradient={config.buttonGradient}
        buttonHoverGradient={config.buttonHoverGradient}
        linkColor={config.linkColor}
      />
    </BaseRegistrationPage>
  );
}
