import DashboardClient from "./dashboard/_components/DashboardClient";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();

  // console.log(session, "session home page");

  if (!session?.user) {
    redirect("/login");
  }

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
    include: {
      notes: true,
      contacts: true
    }
  });

  return (
    <DashboardClient
      user={session?.user}
      statusCount={statusCount}
      recentApplications={recentApplications}
    />
  );
}
