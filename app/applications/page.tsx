import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

import ApplicationsClient from "./_components/ApplicationsClient";

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

  return <ApplicationsClient applications={applications} />;
}

export default ApplicationsPage;

