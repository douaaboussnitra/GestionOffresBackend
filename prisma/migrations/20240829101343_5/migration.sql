-- DropForeignKey
ALTER TABLE `Application` DROP FOREIGN KEY `Application_jobOfferId_fkey`;

-- AddForeignKey
ALTER TABLE `Application` ADD CONSTRAINT `Application_jobOfferId_fkey` FOREIGN KEY (`jobOfferId`) REFERENCES `JobOffer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
