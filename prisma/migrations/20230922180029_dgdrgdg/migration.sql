/*
  Warnings:

  - You are about to drop the column `isNew` on the `anime` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `anime` DROP COLUMN `isNew`;

-- AlterTable
ALTER TABLE `episodes` ADD COLUMN `islast` BOOLEAN NOT NULL DEFAULT false;
