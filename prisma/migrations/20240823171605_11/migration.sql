/*
  Warnings:

  - You are about to drop the column `roleId` on the `recruteur` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `role` table. All the data in the column will be lost.
  - You are about to drop the column `adminId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `candidatId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `recruteurId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `roleId` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `admin` DROP FOREIGN KEY `Admin_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `candidat` DROP FOREIGN KEY `Candidat_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `recruteur` DROP FOREIGN KEY `Recruteur_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_adminId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_candidatId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_recruteurId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_roleId_fkey`;

-- AlterTable
ALTER TABLE `recruteur` DROP COLUMN `roleId`;

-- AlterTable
ALTER TABLE `role` DROP COLUMN `description`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `adminId`,
    DROP COLUMN `candidatId`,
    DROP COLUMN `recruteurId`,
    MODIFY `roleId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `admin`;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
