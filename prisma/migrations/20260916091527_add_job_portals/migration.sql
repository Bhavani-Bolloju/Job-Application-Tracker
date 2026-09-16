-- CreateTable
CREATE TABLE "JobPortal" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "JobPortal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JobPortal_userId_name_key" ON "JobPortal"("userId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "JobPortal_userId_link_key" ON "JobPortal"("userId", "link");

-- AddForeignKey
ALTER TABLE "JobPortal" ADD CONSTRAINT "JobPortal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
