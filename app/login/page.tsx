import { signIn } from "@/lib/auth";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-2xl font-bold">Job Tracker</h1>
        <p className="text-gray-500">Track your job search in one place</p>
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/dashboard" });
          }}
        >
          <button
            type="submit"
            className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-6 py-3 shadow-sm hover:shadow-md transition"
          >
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
}
