import { auth } from "@/lib/auth";

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await request.json();

  const { applicationId, content } = body;

  console.log(body, "notes body ");

  const note = await prisma.note.create({
    data: {
      content,
      applicationId
    }
  });

  return NextResponse.json(note);
}

// export async function DELETE(request: Request) {}

