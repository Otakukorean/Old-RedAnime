/*
  Warnings:

  - You are about to drop the column `userId` on the `notification` table. All the data in the column will be lost.
  - Added the required column `season` to the `Anime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Anime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `epId` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `anime` ADD COLUMN `isNew` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `pin` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `season` VARCHAR(191) NOT NULL,
    ADD COLUMN `year` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `episodes` ADD COLUMN `isNew` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `pin` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `notification` DROP COLUMN `userId`,
    ADD COLUMN `epId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_epId_fkey` FOREIGN KEY (`epId`) REFERENCES `Episodes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
