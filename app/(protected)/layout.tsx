import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import ApplicationSidebar from "../_components/ApplicationSideBar";
import { AppSidebar } from "@/components/ui/app-sidebar";
export default async function ProtectedLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <ApplicationSidebar user={session?.user}>
      <AppSidebar user={session.user} />
      <main>{children}</main>
    </ApplicationSidebar>
  );
}
