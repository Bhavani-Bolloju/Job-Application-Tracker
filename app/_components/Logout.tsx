import { logout } from "./actions/auth";
import ConfirmAlertDialog from "./ConfirmAlertDialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Logout() {
  const router = useRouter();

  const handleLogout = async function () {
    await logout();
    router.replace("/login");
  };

  return (
    <ConfirmAlertDialog
      onConfirm={handleLogout}
      title="Sign out?"
      description="You'll be signed out of your account and returned to the login page."
      confirmLabel="Sign out"
      successMsg="Signed out successfully."
      failureMsg="Failed to sign out. Please try again."
    >
      <Button
        className="capitalize hover:cursor-pointer border-2 border-accent-2"
        variant="outline"
      >
        Logout
      </Button>
    </ConfirmAlertDialog>
  );
}

export default Logout;







