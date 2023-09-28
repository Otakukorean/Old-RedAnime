/*
  Warnings:

  - You are about to drop the column `tmbdbId` on the `anime` table. All the data in the column will be lost.
  - You are about to drop the column `tmbdbId` on the `season` table. All the data in the column will be lost.
  - Added the required column `malId` to the `Anime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `malId` to the `Season` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `anime` DROP COLUMN `tmbdbId`,
    ADD COLUMN `malId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `season` DROP COLUMN `tmbdbId`,
    ADD COLUMN `malId` INTEGER NOT NULL;
