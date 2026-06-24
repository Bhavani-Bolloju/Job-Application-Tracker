import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  await prisma.contact.delete({ where: { id } });

  return NextResponse.json({ success: true });
}

