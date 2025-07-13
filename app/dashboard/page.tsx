import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { logout } from "@/app/auth/actions";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select(
      `
      *,
      business_details(*),
      individual_details(*),
      addresses(*),
      subscriptions(*)
    `
    )
    .eq("user_id", user.id)
    .single();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Welcome to BookEasely Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Hello,{" "}
              {profile
                ? `${profile.first_name} ${profile.last_name}`
                : user.email}
              !
            </p>
            {profile && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {profile.user_type} account • {profile.account_tier} plan
              </p>
            )}
          </div>

          <form action={logout}>
            <Button
              type="submit"
              variant="outline"
              className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Sign Out
            </Button>
          </form>
        </div>

        {/* User Info Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Account Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <p className="mt-1 text-gray-900 dark:text-white">{user.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                User ID
              </label>
              <p className="mt-1 text-gray-900 dark:text-white font-mono text-sm">
                {user.id}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Account Created
              </label>
              <p className="mt-1 text-gray-900 dark:text-white">
                {new Date(user.created_at).toLocaleDateString()}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Verified
              </label>
              <p className="mt-1 text-gray-900 dark:text-white">
                {user.email_confirmed_at ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>

        {/* User Metadata */}
        {user.user_metadata && Object.keys(user.user_metadata).length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Profile Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(user.user_metadata).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                    {key.replace(/_/g, " ")}
                  </label>
                  <p className="mt-1 text-gray-900 dark:text-white">
                    {String(value)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Appointments
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Manage your appointments and bookings
            </p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              View Appointments
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Calendar
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              View your schedule and availability
            </p>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Open Calendar
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Settings
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Configure your account preferences
            </p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Manage Settings
            </Button>
          </div>
        </div>

        {/* Success Message */}
        <div className="mt-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-green-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800 dark:text-green-200">
                Authentication successful!
              </h3>
              <div className="mt-2 text-sm text-green-700 dark:text-green-300">
                <p>
                  You have successfully integrated Supabase authentication with
                  your BookEasely application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
