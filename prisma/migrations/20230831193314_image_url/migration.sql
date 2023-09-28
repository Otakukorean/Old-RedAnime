/*
  Warnings:

  - Added the required column `imageUrl` to the `Anime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Season` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `anime` ADD COLUMN `imageUrl` VARCHAR(191) NOT NULL,
    MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `season` ADD COLUMN `imageUrl` VARCHAR(191) NOT NULL;
