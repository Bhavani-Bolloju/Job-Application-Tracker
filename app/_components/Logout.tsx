import React from "react";

import { logout } from "./actions/auth";
import ConfirmAlertDialog from "./ConfirmAlertDialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Logout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleLogout = async function () {
    console.log("confirm alert dialog");
    await logout();
    router.replace("/");
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
        className="capitalize hover:cursor-pointer hover:bg-bg--2 border-none rounded-none h-full w-full flex gap-2 justify-start items-center"
        variant="outline"
      >
        {children}
      </Button>
    </ConfirmAlertDialog>
  );
}

export default Logout;



