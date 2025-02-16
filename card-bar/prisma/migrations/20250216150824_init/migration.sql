/*
  Warnings:

  - You are about to drop the column `client` on the `Card` table. All the data in the column will be lost.
  - Added the required column `name` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Card` DROP COLUMN `client`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
