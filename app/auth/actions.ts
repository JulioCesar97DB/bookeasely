"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  loginSchema,
  businessRegistrationSchema,
  individualRegistrationSchema,
  clientRegistrationSchema,
} from "@/lib/validations";

export async function login(formData: FormData) {
  const supabase = await createClient();

  const rawData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validatedData = loginSchema.safeParse(rawData);

  if (!validatedData.success) {
    redirect("/auth/login?error=Invalid input data");
  }

  const { error } = await supabase.auth.signInWithPassword(validatedData.data);

  if (error) {
    redirect(`/auth/login?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function logout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect(`/error?message=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signupBusiness(formData: FormData) {
  const supabase = await createClient();

  const rawData = {
    businessName: formData.get("businessName") as string,
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
    phoneNumber: formData.get("phoneNumber") as string,
    businessCategory: formData.get("businessCategory") as string,
    teamMembers: formData.get("teamMembers") as string,
    country: formData.get("country") as string,
    stateProvince: formData.get("stateProvince") as string,
    address: formData.get("address") as string,
    postalCode: formData.get("postalCode") as string,
    accountType: (formData.get("accountType") as string) || "business",
  };

  const validatedData = businessRegistrationSchema.safeParse(rawData);

  if (!validatedData.success) {
    redirect("/auth/register/business?error=Invalid input data");
  }

  const { email, password, ...businessData } = validatedData.data;

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    phone: businessData.phoneNumber,
    options: {
      data: {
        account_type: businessData.accountType,
        business_name: businessData.businessName,
        first_name: businessData.firstName,
        last_name: businessData.lastName,
        phone: businessData.phoneNumber,
        business_category: businessData.businessCategory,
        team_members: businessData.teamMembers,
        country: businessData.country,
        state_province: businessData.stateProvince,
        address: businessData.address,
        postal_code: businessData.postalCode,
        full_name: `${businessData.firstName} ${businessData.lastName}`,
      },
    },
  });

  if (authError) {
    redirect(
      `/auth/register/business?error=${encodeURIComponent(authError.message)}`
    );
  }

  console.log("User created successfully:", authData.user?.id);

  revalidatePath("/", "layout");
  redirect(
    "/auth/login?message=Account created successfully. Please check your email to verify your account."
  );
}

export async function signupIndividual(formData: FormData) {
  const supabase = await createClient();

  const rawData = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
    phoneNumber: formData.get("phoneNumber") as string,
    serviceCategory: formData.get("serviceCategory") as string,
    country: formData.get("country") as string,
    stateProvince: formData.get("stateProvince") as string,
    address: formData.get("address") as string,
    postalCode: formData.get("postalCode") as string,
    accountType:
      (formData.get("accountType") as "individual-free" | "individual-pro") ||
      "individual-free",
  };

  const validatedData = individualRegistrationSchema.safeParse(rawData);

  if (!validatedData.success) {
    redirect("/auth/register/individual?error=Invalid input data");
  }

  const { email, password, ...individualData } = validatedData.data;

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    phone: individualData.phoneNumber,
    options: {
      data: {
        account_type: individualData.accountType,
        first_name: individualData.firstName,
        last_name: individualData.lastName,
        phone: individualData.phoneNumber,
        service_category: individualData.serviceCategory,
        country: individualData.country,
        state_province: individualData.stateProvince,
        address: individualData.address,
        postal_code: individualData.postalCode,
        full_name: `${individualData.firstName} ${individualData.lastName}`,
      },
    },
  });

  if (authError) {
    redirect(
      `/auth/register/individual?error=${encodeURIComponent(authError.message)}`
    );
  }

  console.log("User created successfully:", authData.user?.id);

  revalidatePath("/", "layout");
  redirect(
    "/auth/login?message=Account created successfully. Please check your email to verify your account."
  );
}

export async function signupClient(formData: FormData) {
  const supabase = await createClient();

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const accountType = (formData.get("accountType") as string) || "client";
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  const validatedData = clientRegistrationSchema.safeParse({
    firstName,
    lastName,
    email,
    phone,
    password,
    confirmPassword,
    accountType,
  });

  if (!validatedData.success) {
    redirect("/auth/register/client?error=Invalid input data");
  }

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    phone: phone,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
        full_name: `${firstName} ${lastName}`,
        phone: phone,
        account_type: accountType,
      },
    },
  });

  if (authError) {
    redirect(
      `/auth/register/client?error=${encodeURIComponent(authError.message)}`
    );
  }

  console.log("User created successfully:", authData.user?.id);

  revalidatePath("/", "layout");
  redirect(
    "/auth/login?message=Account created successfully. Please check your email to verify your account."
  );
}
