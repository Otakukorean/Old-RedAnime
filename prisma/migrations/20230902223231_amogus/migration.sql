/*
  Warnings:

  - You are about to drop the column `seasonId` on the `episodes` table. All the data in the column will be lost.
  - You are about to drop the `season` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `animeId` to the `Episodes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `episodes` DROP FOREIGN KEY `Episodes_seasonId_fkey`;

-- DropForeignKey
ALTER TABLE `season` DROP FOREIGN KEY `Season_animeId_fkey`;

-- AlterTable
ALTER TABLE `episodes` DROP COLUMN `seasonId`,
    ADD COLUMN `animeId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `season`;

-- AddForeignKey
ALTER TABLE `Episodes` ADD CONSTRAINT `Episodes_animeId_fkey` FOREIGN KEY (`animeId`) REFERENCES `Anime`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
