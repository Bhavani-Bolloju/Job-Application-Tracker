import { prisma } from "@/lib/prisma";

async function main() {
  await prisma.user.create({
    data: {
      name: "Guest User",
      email: "guest@example.com"
    }
  });
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });

