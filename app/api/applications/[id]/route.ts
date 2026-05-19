import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// PUT update application
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();

  const application = await prisma.application.update({
    where: { id: params.id, userId: session.user.id },
    data: {
      company: body.company,
      role: body.role,
      status: body.status,
      platform: body.platform || null,
      type: body.type || null,
      location: body.location || null,
      salary: body.salary || null,
      url: body.url || null,
      appliedDate: body.appliedDate ? new Date(body.appliedDate) : new Date(),
      followupDate: body.followupDate ? new Date(body.followupDate) : null
    }
  });

  return NextResponse.json(application);
}

// DELETE application
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await prisma.application.delete({
    where: { id: params.id, userId: session.user.id }
  });

  return NextResponse.json({ success: true });
}
