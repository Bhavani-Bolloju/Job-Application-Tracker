import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();

  if (!session?.user || !session?.user.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();

  const { id } = await params;

  const jobPortal = await prisma.jobPortal.update({
    where: { id: id, userId: session.user.id },
    data: {
      name: body.name,
      link: body.link,
      description: body.description
    }
  });

  return NextResponse.json(jobPortal);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  const { id } = await params;

  await prisma.jobPortal.delete({ where: { id, userId } });

  return NextResponse.json({ success: true });
}

