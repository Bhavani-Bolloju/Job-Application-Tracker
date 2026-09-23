import React from "react";
import JobPortalClient from "./_components/JobPortalClient";
import { auth } from "@/lib/auth";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
async function JobPortalsPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  const userId = session.user.id;

  const jobPortals = await prisma.jobPortal.findMany({
    where: { userId }
  });

  return (
    <div>
      <JobPortalClient jobPortals={jobPortals} />
    </div>
  );
}

export default JobPortalsPage;

