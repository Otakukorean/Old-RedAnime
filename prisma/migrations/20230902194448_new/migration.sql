/*
  Warnings:

  - Added the required column `EpName` to the `Episodes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SeasonName` to the `Season` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `episodes` ADD COLUMN `EpName` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `season` ADD COLUMN `SeasonName` INTEGER NOT NULL;
