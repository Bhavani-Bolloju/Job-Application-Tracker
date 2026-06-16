import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

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

  console.log(application, id, "single application");

  return (
    <div>
      <h2>Loading individual application</h2>
    </div>
  );
}

export default page;

