/*
  Warnings:

  - Added the required column `skills` to the `Candidat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `candidat` ADD COLUMN `skills` VARCHAR(191) NOT NULL;
