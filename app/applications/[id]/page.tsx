import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

import ApplicationDetail from "../_components/detail/ApplicationDetail";

type Props = {
  params: Promise<{ id: string }>;
};

async function page({ params }: Props) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const { id } = await params;

  const application = await prisma.application.findUnique({
    where: { id },
    include: { notes: true, contacts: true }
  });

  // console.log(application, id, "single application");

  return (
    <div className="px-10 py-5">
      {application && <ApplicationDetail application={application} />}
    </div>
  );
}

export default page;

