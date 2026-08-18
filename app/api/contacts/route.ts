import { auth } from "@/lib/auth";

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await auth();


  if (!session?.user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await request.json();

  // console.log(body, "contact body");

  await prisma.contact.create({ data: body });

  return NextResponse.json({ success: true });
}

