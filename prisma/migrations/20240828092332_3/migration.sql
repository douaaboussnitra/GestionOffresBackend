/*
  Warnings:

  - Added the required column `email` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `experience` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobType` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Application` ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `experience` VARCHAR(191) NOT NULL,
    ADD COLUMN `fullName` VARCHAR(191) NOT NULL,
    ADD COLUMN `jobType` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL;
