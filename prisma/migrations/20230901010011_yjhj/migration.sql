/*
  Warnings:

  - You are about to drop the column `malId` on the `anime` table. All the data in the column will be lost.
  - You are about to drop the column `malId` on the `season` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `anime` DROP COLUMN `malId`;

-- AlterTable
ALTER TABLE `season` DROP COLUMN `malId`;
