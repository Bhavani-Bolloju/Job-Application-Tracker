
import ConfirmAlertDialog from "./ConfirmAlertDialog";

import { logout } from "../actions/auth";
function Logout() {
  const handleLogout = async function () {
    await logout();
  };

  return (
    <ConfirmAlertDialog
      onConfirm={handleLogout}
      title="Sign out?"
      description="You'll be signed out of your account and returned to the login page."
      buttonLabel="Logout"
      confirmLabel="Logout"
      successMsg="Signed out successfully."
      failureMsg="Failed to sign out. Please try again."
      confirmVariant="logout"
    />
  );
}

export default Logout;

