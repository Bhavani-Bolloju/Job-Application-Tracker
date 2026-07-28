import { signIn } from "@/lib/auth";
import { Button } from "@/components/ui/button";


export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-geist">
      <h1 className="text-page-title! font-bold">Job Tracker</h1>
      <p className="text-text-muted mb-5">Track your job search in one place</p>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
        className="flex justify-center"
      >
        <Button
          type="submit"
          className="flex bg-accent-2 items-center gap-2 rounded-lg px-6 py-5 shadow-sm hover:shadow-md transition hover:cursor-pointer hover:bg-accent-3 text-background "
        >
          Sign in with Google
        </Button>
      </form>
      <div className="my-2">or</div>

      <form
        action={async () => {
          "use server";

          try {
            await signIn("credentials", {
              redirectTo: "/"
            });
          } catch (error) {
            console.error(error);
            throw error;
          }
        }}
      >
        <Button
          type="submit"
          variant="outline"
          className="hover:cursor-pointer py-5 border-accent-2"
        >
          Continue as Guest
        </Button>
      </form>
    </div>
  );
}
