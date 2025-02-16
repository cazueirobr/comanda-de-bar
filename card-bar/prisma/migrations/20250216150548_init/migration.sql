/*
  Warnings:

  - You are about to drop the column `name` on the `Card` table. All the data in the column will be lost.
  - Added the required column `client` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Card` DROP COLUMN `name`,
    ADD COLUMN `client` VARCHAR(191) NOT NULL;
