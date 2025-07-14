"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  loginSchema,
  businessRegistrationSchema,
  individualRegistrationSchema,
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
  redirect("/auth/login");
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
    accountType: "business" as const,
  };

  const validatedData = businessRegistrationSchema.safeParse(rawData);

  if (!validatedData.success) {
    redirect("/auth/register/business?error=Invalid input data");
  }

  const { email, password, ...businessData } = validatedData.data;

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        user_type: "business",
        business_name: businessData.businessName,
        first_name: businessData.firstName,
        last_name: businessData.lastName,
        phone: businessData.phoneNumber,
      },
    },
  });

  if (authError) {
    redirect(
      `/auth/register/business?error=${encodeURIComponent(authError.message)}`
    );
  }

  if (authData.user) {
    try {
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .insert({
          user_id: authData.user.id,
          user_type: "business",
          account_tier: "free",
          first_name: businessData.firstName,
          last_name: businessData.lastName,
          email: email,
          phone: businessData.phoneNumber,
        })
        .select()
        .single();

      if (profileError) {
        console.error("Error creating profile:", profileError);
      } else {
        const { error: businessError } = await supabase
          .from("business_details")
          .insert({
            profile_id: profile.id,
            business_name: businessData.businessName,
            business_category: businessData.businessCategory,
            team_members: businessData.teamMembers,
          });

        if (businessError) {
          console.error("Error creating business details:", businessError);
        }

        const { error: addressError } = await supabase
          .from("addresses")
          .insert({
            profile_id: profile.id,
            type: "business",
            country: businessData.country,
            state_province: businessData.stateProvince,
            address_line_1: businessData.address,
            postal_code: businessData.postalCode,
            is_default: true,
          });

        if (addressError) {
          console.error("Error creating address:", addressError);
        }

        const { error: subscriptionError } = await supabase
          .from("subscriptions")
          .insert({
            profile_id: profile.id,
            plan_name: "Business Free",
            plan_tier: "free",
            status: "active",
          });

        if (subscriptionError) {
          console.error("Error creating subscription:", subscriptionError);
        }
      }
    } catch (error) {
      console.error("Error in profile creation process:", error);
    }
  }

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
    options: {
      data: {
        user_type: "individual",
        first_name: individualData.firstName,
        last_name: individualData.lastName,
        phone: individualData.phoneNumber,
        account_type: individualData.accountType,
      },
    },
  });

  if (authError) {
    redirect(
      `/auth/register/individual?error=${encodeURIComponent(authError.message)}`
    );
  }

  if (authData.user) {
    try {
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .insert({
          user_id: authData.user.id,
          user_type: "individual",
          account_tier:
            individualData.accountType === "individual-pro" ? "pro" : "free",
          first_name: individualData.firstName,
          last_name: individualData.lastName,
          email: email,
          phone: individualData.phoneNumber,
        })
        .select()
        .single();

      if (profileError) {
        console.error("Error creating profile:", profileError);
      } else {
        const { error: individualError } = await supabase
          .from("individual_details")
          .insert({
            profile_id: profile.id,
            service_category: individualData.serviceCategory,
          });

        if (individualError) {
          console.error("Error creating individual details:", individualError);
        }

        const { error: addressError } = await supabase
          .from("addresses")
          .insert({
            profile_id: profile.id,
            type: "primary",
            country: individualData.country,
            state_province: individualData.stateProvince,
            address_line_1: individualData.address,
            postal_code: individualData.postalCode,
            is_default: true,
          });

        if (addressError) {
          console.error("Error creating address:", addressError);
        }

        const { error: subscriptionError } = await supabase
          .from("subscriptions")
          .insert({
            profile_id: profile.id,
            plan_name:
              individualData.accountType === "individual-pro"
                ? "Individual Pro"
                : "Individual Free",
            plan_tier:
              individualData.accountType === "individual-pro" ? "pro" : "free",
            status: "active",
          });

        if (subscriptionError) {
          console.error("Error creating subscription:", subscriptionError);
        }
      }
    } catch (error) {
      console.error("Error in profile creation process:", error);
    }
  }

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
  const password = formData.get("password") as string;

  // Basic server-side validation for security
  if (!email || !password || !firstName || !lastName || !phone) {
    redirect("/auth/register/client?error=Missing required fields");
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
