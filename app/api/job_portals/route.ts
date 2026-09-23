import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function GET() {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const jobPortals = await prisma.jobPortal.findMany({
    where: { userId: session.user.id }
  });

  console.log(jobPortals, "get req jobPortals");

  return NextResponse.json(jobPortals);
}

export async function POST(request: Request) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const userId = session.user?.id;

  if (!userId) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await request.json();

  const jobPortal = await prisma.jobPortal.create({
    data: {
      name: body.name,
      link: body.link,
      description: body.description,
      userId,
    }
  });

  return NextResponse.json(jobPortal)
}

