/*
  Warnings:

  - Added the required column `color` to the `Coordinates` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coordinates" ADD COLUMN     "color" TEXT NOT NULL;
