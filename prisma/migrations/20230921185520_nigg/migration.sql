/*
  Warnings:

  - Added the required column `airday` to the `Anime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Anime` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `anime` ADD COLUMN `airday` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL;
