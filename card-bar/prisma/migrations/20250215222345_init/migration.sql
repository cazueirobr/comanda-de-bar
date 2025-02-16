/*
  Warnings:

  - You are about to drop the column `clientId` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Card` DROP FOREIGN KEY `Card_clientId_fkey`;

-- DropForeignKey
ALTER TABLE `Item` DROP FOREIGN KEY `Item_cardId_fkey`;

-- DropIndex
DROP INDEX `Card_clientId_fkey` ON `Card`;

-- DropIndex
DROP INDEX `Item_cardId_fkey` ON `Item`;

-- AlterTable
ALTER TABLE `Card` DROP COLUMN `clientId`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Item` DROP COLUMN `price`,
    DROP COLUMN `quantity`;

-- DropTable
DROP TABLE `Client`;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_cardId_fkey` FOREIGN KEY (`cardId`) REFERENCES `Card`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
