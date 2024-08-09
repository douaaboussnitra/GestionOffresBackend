/*
  Warnings:

  - You are about to drop the column `created_at` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `candidatId` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `CV` on the `Candidat` table. All the data in the column will be lost.
  - You are about to drop the column `candidatureId` on the `Interview` table. All the data in the column will be lost.
  - You are about to drop the column `job_offer` on the `Recruteur` table. All the data in the column will be lost.
  - You are about to drop the `Notification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CandidatToInterview` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CandidatToSkill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserRoles` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[adminId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[recruteurId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[candidatId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[candidatId]` on the table `Validation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `roleId` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `candidateId` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cv` to the `Candidat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleId` to the `Candidat` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Category` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `applicationId` to the `Interview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `candidatId` to the `Interview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleId` to the `Recruteur` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notification` to the `Validation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Application` DROP FOREIGN KEY `Application_candidatId_fkey`;

-- DropForeignKey
ALTER TABLE `Interview` DROP FOREIGN KEY `Interview_candidatureId_fkey`;

-- DropForeignKey
ALTER TABLE `Notification` DROP FOREIGN KEY `Notification_candidatId_fkey`;

-- DropForeignKey
ALTER TABLE `Skill` DROP FOREIGN KEY `Skill_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `_CandidatToInterview` DROP FOREIGN KEY `_CandidatToInterview_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CandidatToInterview` DROP FOREIGN KEY `_CandidatToInterview_B_fkey`;

-- DropForeignKey
ALTER TABLE `_CandidatToSkill` DROP FOREIGN KEY `_CandidatToSkill_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CandidatToSkill` DROP FOREIGN KEY `_CandidatToSkill_B_fkey`;

-- DropForeignKey
ALTER TABLE `_UserRoles` DROP FOREIGN KEY `_UserRoles_A_fkey`;

-- DropForeignKey
ALTER TABLE `_UserRoles` DROP FOREIGN KEY `_UserRoles_B_fkey`;

-- DropIndex
DROP INDEX `Admin_email_key` ON `Admin`;

-- DropIndex
DROP INDEX `Admin_username_key` ON `Admin`;

-- DropIndex
DROP INDEX `Role_name_key` ON `Role`;

-- AlterTable
ALTER TABLE `Admin` DROP COLUMN `created_at`,
    DROP COLUMN `role`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `roleId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Application` DROP COLUMN `candidatId`,
    ADD COLUMN `candidateId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Candidat` DROP COLUMN `CV`,
    ADD COLUMN `cv` VARCHAR(191) NOT NULL,
    ADD COLUMN `roleId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Category` MODIFY `description` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Interview` DROP COLUMN `candidatureId`,
    ADD COLUMN `applicationId` INTEGER NOT NULL,
    ADD COLUMN `candidatId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Recruteur` DROP COLUMN `job_offer`,
    ADD COLUMN `roleId` INTEGER NOT NULL,
    MODIFY `description` VARCHAR(191) NULL,
    MODIFY `logo` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `adminId` INTEGER NULL,
    ADD COLUMN `candidatId` INTEGER NULL,
    ADD COLUMN `recruteurId` INTEGER NULL,
    ADD COLUMN `roleId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Validation` ADD COLUMN `notification` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Notification`;

-- DropTable
DROP TABLE `Skill`;

-- DropTable
DROP TABLE `_CandidatToInterview`;

-- DropTable
DROP TABLE `_CandidatToSkill`;

-- DropTable
DROP TABLE `_UserRoles`;

-- CreateTable
CREATE TABLE `Skills` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `categoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CandidatSkills` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CandidatSkills_AB_unique`(`A`, `B`),
    INDEX `_CandidatSkills_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ApplicationInterviews` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ApplicationInterviews_AB_unique`(`A`, `B`),
    INDEX `_ApplicationInterviews_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_adminId_key` ON `User`(`adminId`);

-- CreateIndex
CREATE UNIQUE INDEX `User_recruteurId_key` ON `User`(`recruteurId`);

-- CreateIndex
CREATE UNIQUE INDEX `User_candidatId_key` ON `User`(`candidatId`);

-- CreateIndex
CREATE UNIQUE INDEX `Validation_candidatId_key` ON `Validation`(`candidatId`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_recruteurId_fkey` FOREIGN KEY (`recruteurId`) REFERENCES `Recruteur`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_candidatId_fkey` FOREIGN KEY (`candidatId`) REFERENCES `Candidat`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recruteur` ADD CONSTRAINT `Recruteur_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Candidat` ADD CONSTRAINT `Candidat_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Application` ADD CONSTRAINT `Application_candidateId_fkey` FOREIGN KEY (`candidateId`) REFERENCES `Candidat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Interview` ADD CONSTRAINT `Interview_applicationId_fkey` FOREIGN KEY (`applicationId`) REFERENCES `Application`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Interview` ADD CONSTRAINT `Interview_candidatId_fkey` FOREIGN KEY (`candidatId`) REFERENCES `Candidat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Skills` ADD CONSTRAINT `Skills_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CandidatSkills` ADD CONSTRAINT `_CandidatSkills_A_fkey` FOREIGN KEY (`A`) REFERENCES `Candidat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CandidatSkills` ADD CONSTRAINT `_CandidatSkills_B_fkey` FOREIGN KEY (`B`) REFERENCES `Skills`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ApplicationInterviews` ADD CONSTRAINT `_ApplicationInterviews_A_fkey` FOREIGN KEY (`A`) REFERENCES `Application`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ApplicationInterviews` ADD CONSTRAINT `_ApplicationInterviews_B_fkey` FOREIGN KEY (`B`) REFERENCES `Interview`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
