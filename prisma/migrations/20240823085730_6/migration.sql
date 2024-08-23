/*
  Warnings:

  - You are about to drop the column `cv` on the `candidat` table. All the data in the column will be lost.
  - You are about to drop the `_applicationinterviews` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `interview` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_applicationinterviews` DROP FOREIGN KEY `_ApplicationInterviews_A_fkey`;

-- DropForeignKey
ALTER TABLE `_applicationinterviews` DROP FOREIGN KEY `_ApplicationInterviews_B_fkey`;

-- DropForeignKey
ALTER TABLE `interview` DROP FOREIGN KEY `Interview_applicationId_fkey`;

-- DropForeignKey
ALTER TABLE `interview` DROP FOREIGN KEY `Interview_candidatId_fkey`;

-- AlterTable
ALTER TABLE `candidat` DROP COLUMN `cv`;

-- DropTable
DROP TABLE `_applicationinterviews`;

-- DropTable
DROP TABLE `interview`;
