/*
  Warnings:

  - Added the required column `email` to the `Candidates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nom` to the `Candidates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prenom` to the `Candidates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephone` to the `Candidates` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Candidates` ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `nom` VARCHAR(191) NOT NULL,
    ADD COLUMN `prenom` VARCHAR(191) NOT NULL,
    ADD COLUMN `telephone` INTEGER NOT NULL;
