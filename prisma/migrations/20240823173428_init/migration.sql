-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `roleId` INTEGER NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recruteur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `postal_code` VARCHAR(191) NULL,
    `logo` VARCHAR(191) NULL,
    `sector` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `website` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Candidat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `experience` VARCHAR(191) NULL,
    `fullname` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `roleId` INTEGER NOT NULL,
    `skills` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JobOffer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `requirements` VARCHAR(191) NULL,
    `location` VARCHAR(191) NOT NULL,
    `salary` VARCHAR(191) NOT NULL,
    `companyName` VARCHAR(191) NOT NULL,
    `postedBy` INTEGER NOT NULL,
    `contractType` VARCHAR(191) NOT NULL,
    `hierarchyLevel` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `skills` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Application` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `candidateId` INTEGER NOT NULL,
    `jobOfferId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `filecv` VARCHAR(191) NOT NULL,
    `filemotiva` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Validation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `candidatId` INTEGER NOT NULL,
    `validated_by` INTEGER NOT NULL,
    `result` VARCHAR(191) NOT NULL,
    `jobOfferId` INTEGER NOT NULL,
    `notification` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Validation_candidatId_key`(`candidatId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JobOffer` ADD CONSTRAINT `JobOffer_postedBy_fkey` FOREIGN KEY (`postedBy`) REFERENCES `Recruteur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Application` ADD CONSTRAINT `Application_candidateId_fkey` FOREIGN KEY (`candidateId`) REFERENCES `Candidat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Application` ADD CONSTRAINT `Application_jobOfferId_fkey` FOREIGN KEY (`jobOfferId`) REFERENCES `JobOffer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Validation` ADD CONSTRAINT `Validation_candidatId_fkey` FOREIGN KEY (`candidatId`) REFERENCES `Candidat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Validation` ADD CONSTRAINT `Validation_validated_by_fkey` FOREIGN KEY (`validated_by`) REFERENCES `Recruteur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
