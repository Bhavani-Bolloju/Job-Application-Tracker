import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET all applications
export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const applications = await prisma.application.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
    include: { notes: true, contacts: true }
  });

  return NextResponse.json(applications);
}

// POST new application
export async function POST(request: Request) {
  const session = await auth();
  
  console.log(session, "post req application add")

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session?.user.id;
  
  
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();

  const application = await prisma.application.create({
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
      followupDate: body.followupDate ? new Date(body.followupDate) : null,
      userId
    }
  });

  return NextResponse.json(application, { status: 201 });
}

