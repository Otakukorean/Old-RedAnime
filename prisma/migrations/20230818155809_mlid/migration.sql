/*
  Warnings:

  - Added the required column `MalId` to the `Anime` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `anime` ADD COLUMN `MalId` VARCHAR(191) NOT NULL;
