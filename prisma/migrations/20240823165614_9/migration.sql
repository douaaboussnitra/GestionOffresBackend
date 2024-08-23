/*
  Warnings:

  - You are about to drop the `_candidatskills` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_jobofferskills` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `skills` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `skills` to the `JobOffer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_candidatskills` DROP FOREIGN KEY `_CandidatSkills_A_fkey`;

-- DropForeignKey
ALTER TABLE `_candidatskills` DROP FOREIGN KEY `_CandidatSkills_B_fkey`;

-- DropForeignKey
ALTER TABLE `_jobofferskills` DROP FOREIGN KEY `_JobOfferSkills_A_fkey`;

-- DropForeignKey
ALTER TABLE `_jobofferskills` DROP FOREIGN KEY `_JobOfferSkills_B_fkey`;

-- DropForeignKey
ALTER TABLE `skills` DROP FOREIGN KEY `Skills_categoryId_fkey`;

-- AlterTable
ALTER TABLE `joboffer` ADD COLUMN `skills` VARCHAR(191) NOT NULL,
    MODIFY `requirements` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `_candidatskills`;

-- DropTable
DROP TABLE `_jobofferskills`;

-- DropTable
DROP TABLE `category`;

-- DropTable
DROP TABLE `skills`;
