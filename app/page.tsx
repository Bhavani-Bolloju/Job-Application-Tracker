import DashboardClient from "./dashboard/_components/DashboardClient";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
export default async function Dashboard() {
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

  const statusCount = await prisma.application.groupBy({
    by: ["status"],
    where: {
      userId: session.user.id
    },
    _count: {
      status: true
    }
  });

  const recentApplications = await prisma.application.findMany({
    where: { userId: session.user.id },
    orderBy: { updatedAt: "desc" },
    take: 5,
  });

  return (
    <div>
      <DashboardClient
        user={session?.user}
        applications={applications}
        statusCount={statusCount}
        recentApplications={recentApplications}
      />
    </div>
  );
}
