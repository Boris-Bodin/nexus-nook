/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Profil` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Profil" ALTER COLUMN "title" SET DEFAULT '',
ALTER COLUMN "subTitle" SET DEFAULT '';

-- AlterTable
ALTER TABLE "ProfilItem" ALTER COLUMN "label" SET DEFAULT '',
ALTER COLUMN "uri" SET DEFAULT '';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "resetToken" DROP NOT NULL,
ALTER COLUMN "lastLoginAt" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Profil_slug_key" ON "Profil"("slug");
