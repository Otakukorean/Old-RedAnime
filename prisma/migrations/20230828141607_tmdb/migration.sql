/*
  Warnings:

  - You are about to drop the column `MalId` on the `anime` table. All the data in the column will be lost.
  - You are about to drop the column `MalId` on the `season` table. All the data in the column will be lost.
  - Added the required column `tmbdbId` to the `Anime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tmbdbId` to the `Season` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `anime` DROP COLUMN `MalId`,
    ADD COLUMN `tmbdbId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `season` DROP COLUMN `MalId`,
    ADD COLUMN `tmbdbId` INTEGER NOT NULL;
