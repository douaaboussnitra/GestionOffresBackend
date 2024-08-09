/*
  Warnings:

  - You are about to drop the column `candidate_id` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `job_offer_id` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `application_id` on the `Interview` table. All the data in the column will be lost.
  - You are about to drop the column `meeting_link` on the `Interview` table. All the data in the column will be lost.
  - You are about to drop the column `id_role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `candidate_id` on the `Validation` table. All the data in the column will be lost.
  - You are about to drop the `Candidates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JobOffers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notifications` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Skills` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CandidatesToSkills` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `candidatId` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobOfferId` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `candidatureId` to the `Interview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link_meet` to the `Interview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `candidatId` to the `Validation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Application` DROP FOREIGN KEY `Application_candidate_id_fkey`;

-- DropForeignKey
ALTER TABLE `Application` DROP FOREIGN KEY `Application_job_offer_id_fkey`;

-- DropForeignKey
ALTER TABLE `Candidates` DROP FOREIGN KEY `Candidates_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `Interview` DROP FOREIGN KEY `Interview_application_id_fkey`;

-- DropForeignKey
ALTER TABLE `JobOffers` DROP FOREIGN KEY `JobOffers_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `JobOffers` DROP FOREIGN KEY `JobOffers_posted_by_fkey`;

-- DropForeignKey
ALTER TABLE `Notifications` DROP FOREIGN KEY `Notifications_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `Skills` DROP FOREIGN KEY `Skills_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_id_role_fkey`;

-- DropForeignKey
ALTER TABLE `Validation` DROP FOREIGN KEY `Validation_candidate_id_fkey`;

-- DropForeignKey
ALTER TABLE `_CandidatesToSkills` DROP FOREIGN KEY `_CandidatesToSkills_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CandidatesToSkills` DROP FOREIGN KEY `_CandidatesToSkills_B_fkey`;

-- AlterTable
ALTER TABLE `Application` DROP COLUMN `candidate_id`,
    DROP COLUMN `job_offer_id`,
    ADD COLUMN `candidatId` INTEGER NOT NULL,
    ADD COLUMN `jobOfferId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Category` ADD COLUMN `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Interview` DROP COLUMN `application_id`,
    DROP COLUMN `meeting_link`,
    ADD COLUMN `candidatureId` INTEGER NOT NULL,
    ADD COLUMN `link_meet` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `id_role`,
    DROP COLUMN `user_name`;

-- AlterTable
ALTER TABLE `Validation` DROP COLUMN `candidate_id`,
    ADD COLUMN `candidatId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `Candidates`;

-- DropTable
DROP TABLE `JobOffers`;

-- DropTable
DROP TABLE `Notifications`;

-- DropTable
DROP TABLE `Skills`;

-- DropTable
DROP TABLE `_CandidatesToSkills`;

-- CreateTable
CREATE TABLE `Candidat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `CV` VARCHAR(191) NOT NULL,
    `experience` VARCHAR(191) NOT NULL,
    `fullname` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recruteur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `postal_code` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NOT NULL,
    `job_offer` VARCHAR(191) NOT NULL,
    `sector` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `website` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `categoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `candidatId` INTEGER NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `createdBy` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JobOffer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `requirement` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `salary` VARCHAR(191) NOT NULL,
    `postedBy` INTEGER NOT NULL,
    `type_de_contrat` VARCHAR(191) NOT NULL,
    `niveau_hierarchique` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'Admin',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Admin_username_key`(`username`),
    UNIQUE INDEX `Admin_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_UserRoles` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_UserRoles_AB_unique`(`A`, `B`),
    INDEX `_UserRoles_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CandidatToSkill` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CandidatToSkill_AB_unique`(`A`, `B`),
    INDEX `_CandidatToSkill_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CandidatToInterview` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CandidatToInterview_AB_unique`(`A`, `B`),
    INDEX `_CandidatToInterview_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Role_name_key` ON `Role`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);

-- AddForeignKey
ALTER TABLE `Application` ADD CONSTRAINT `Application_candidatId_fkey` FOREIGN KEY (`candidatId`) REFERENCES `Candidat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Application` ADD CONSTRAINT `Application_jobOfferId_fkey` FOREIGN KEY (`jobOfferId`) REFERENCES `JobOffer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Interview` ADD CONSTRAINT `Interview_candidatureId_fkey` FOREIGN KEY (`candidatureId`) REFERENCES `Application`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Skill` ADD CONSTRAINT `Skill_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Validation` ADD CONSTRAINT `Validation_candidatId_fkey` FOREIGN KEY (`candidatId`) REFERENCES `Candidat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Validation` ADD CONSTRAINT `Validation_validated_by_fkey` FOREIGN KEY (`validated_by`) REFERENCES `Recruteur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_candidatId_fkey` FOREIGN KEY (`candidatId`) REFERENCES `Candidat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JobOffer` ADD CONSTRAINT `JobOffer_postedBy_fkey` FOREIGN KEY (`postedBy`) REFERENCES `Recruteur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserRoles` ADD CONSTRAINT `_UserRoles_A_fkey` FOREIGN KEY (`A`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserRoles` ADD CONSTRAINT `_UserRoles_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CandidatToSkill` ADD CONSTRAINT `_CandidatToSkill_A_fkey` FOREIGN KEY (`A`) REFERENCES `Candidat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CandidatToSkill` ADD CONSTRAINT `_CandidatToSkill_B_fkey` FOREIGN KEY (`B`) REFERENCES `Skill`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CandidatToInterview` ADD CONSTRAINT `_CandidatToInterview_A_fkey` FOREIGN KEY (`A`) REFERENCES `Candidat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CandidatToInterview` ADD CONSTRAINT `_CandidatToInterview_B_fkey` FOREIGN KEY (`B`) REFERENCES `Interview`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
