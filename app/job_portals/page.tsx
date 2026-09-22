import React from "react";
import JobPortalClient from "./_components/JobPortalClient";
import { auth } from "@/lib/auth";

import { prisma } from "@/lib/prisma";
async function JobPortalsPage() {
  const session = await auth();
  if (!session?.user) {
    //throw error
    return null;
  }

  const userId = session.user.id;

  const jobPortals = await prisma.jobPortal.findMany({
    where: { userId}
  });

  //   .findMany({
  //   where: { id: session?.user.id }
  // });

  return (
    <div>
      <JobPortalClient jobPortals={jobPortals} />
    </div>
  );
}

export default JobPortalsPage;



