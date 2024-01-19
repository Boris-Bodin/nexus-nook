/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Product";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "resetToken" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastLoginAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profil" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,

    CONSTRAINT "Profil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfilItem" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "uri" TEXT NOT NULL,

    CONSTRAINT "ProfilItem_pkey" PRIMARY KEY ("id")
);
