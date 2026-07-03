import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // const { searchParams } = new URL(request.url);

  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  // console.log(id, searchParams, "delete function")

  const res = await prisma.note.delete({ where: { id } });

  return NextResponse.json(res);
}

