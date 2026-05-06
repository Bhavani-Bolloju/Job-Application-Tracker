import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ApplicationTable from "./_components/ApplicationTable";
import { Button } from "@/components/ui/button";

async function ApplicationsPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const applications = await prisma.application.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
    include: {
      notes: true,
      contacts: true
    }
  });

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">Applications</h1>
        <Button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
          + Add New
        </Button>
      </div>

      <ApplicationTable applications={applications} />
    </div>
  );
}

export default ApplicationsPage;

