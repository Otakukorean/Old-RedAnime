/*
  Warnings:

  - You are about to drop the column `rating` on the `season` table. All the data in the column will be lost.
  - Added the required column `backdropImage` to the `Anime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Anime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `backdropImage` to the `Season` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `anime` ADD COLUMN `backdropImage` VARCHAR(191) NOT NULL,
    ADD COLUMN `rating` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `season` DROP COLUMN `rating`,
    ADD COLUMN `backdropImage` VARCHAR(191) NOT NULL;
