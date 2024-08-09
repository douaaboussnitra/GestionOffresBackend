-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_id_role_fkey`;

-- AlterTable
ALTER TABLE `User` MODIFY `id_role` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_id_role_fkey` FOREIGN KEY (`id_role`) REFERENCES `Role`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
