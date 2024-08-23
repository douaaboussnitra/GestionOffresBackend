/*
  Warnings:

  - You are about to drop the column `niveau_hierarchique` on the `joboffer` table. All the data in the column will be lost.
  - You are about to drop the column `requirement` on the `joboffer` table. All the data in the column will be lost.
  - You are about to drop the column `type_de_contrat` on the `joboffer` table. All the data in the column will be lost.
  - Added the required column `filecv` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filemotiva` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyName` to the `JobOffer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contractType` to the `JobOffer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `JobOffer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hierarchyLevel` to the `JobOffer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requirements` to the `JobOffer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobOfferId` to the `Validation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `application` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `filecv` VARCHAR(191) NOT NULL,
    ADD COLUMN `filemotiva` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `candidat` MODIFY `experience` VARCHAR(191) NULL,
    MODIFY `phone` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `joboffer` DROP COLUMN `niveau_hierarchique`,
    DROP COLUMN `requirement`,
    DROP COLUMN `type_de_contrat`,
    ADD COLUMN `companyName` VARCHAR(191) NOT NULL,
    ADD COLUMN `contractType` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `hierarchyLevel` VARCHAR(191) NOT NULL,
    ADD COLUMN `requirements` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `recruteur` MODIFY `postal_code` VARCHAR(191) NULL,
    MODIFY `sector` VARCHAR(191) NULL,
    MODIFY `city` VARCHAR(191) NULL,
    MODIFY `website` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `validation` ADD COLUMN `jobOfferId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `_JobOfferSkills` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_JobOfferSkills_AB_unique`(`A`, `B`),
    INDEX `_JobOfferSkills_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_JobOfferSkills` ADD CONSTRAINT `_JobOfferSkills_A_fkey` FOREIGN KEY (`A`) REFERENCES `JobOffer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_JobOfferSkills` ADD CONSTRAINT `_JobOfferSkills_B_fkey` FOREIGN KEY (`B`) REFERENCES `Skills`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
