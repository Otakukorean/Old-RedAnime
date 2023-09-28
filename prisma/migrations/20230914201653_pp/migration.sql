-- DropForeignKey
ALTER TABLE `animetags` DROP FOREIGN KEY `AnimeTags_animeId_fkey`;

-- DropForeignKey
ALTER TABLE `episodes` DROP FOREIGN KEY `Episodes_animeId_fkey`;

-- DropForeignKey
ALTER TABLE `favoritelist` DROP FOREIGN KEY `favoriteList_animeId_fkey`;

-- DropForeignKey
ALTER TABLE `notification` DROP FOREIGN KEY `Notification_animeId_fkey`;

-- DropForeignKey
ALTER TABLE `notification` DROP FOREIGN KEY `Notification_epId_fkey`;

-- DropForeignKey
ALTER TABLE `servers` DROP FOREIGN KEY `Servers_epId_fkey`;

-- DropForeignKey
ALTER TABLE `subscripe` DROP FOREIGN KEY `Subscripe_animeId_fkey`;

-- DropForeignKey
ALTER TABLE `watchhistory` DROP FOREIGN KEY `WatchHistory_epId_fkey`;

-- DropForeignKey
ALTER TABLE `watchlater` DROP FOREIGN KEY `WatchLater_animeId_fkey`;

-- AddForeignKey
ALTER TABLE `Episodes` ADD CONSTRAINT `Episodes_animeId_fkey` FOREIGN KEY (`animeId`) REFERENCES `Anime`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Servers` ADD CONSTRAINT `Servers_epId_fkey` FOREIGN KEY (`epId`) REFERENCES `Episodes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `favoriteList` ADD CONSTRAINT `favoriteList_animeId_fkey` FOREIGN KEY (`animeId`) REFERENCES `Anime`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WatchLater` ADD CONSTRAINT `WatchLater_animeId_fkey` FOREIGN KEY (`animeId`) REFERENCES `Anime`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WatchHistory` ADD CONSTRAINT `WatchHistory_epId_fkey` FOREIGN KEY (`epId`) REFERENCES `Episodes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subscripe` ADD CONSTRAINT `Subscripe_animeId_fkey` FOREIGN KEY (`animeId`) REFERENCES `Anime`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_animeId_fkey` FOREIGN KEY (`animeId`) REFERENCES `Anime`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_epId_fkey` FOREIGN KEY (`epId`) REFERENCES `Episodes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AnimeTags` ADD CONSTRAINT `AnimeTags_animeId_fkey` FOREIGN KEY (`animeId`) REFERENCES `Anime`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
