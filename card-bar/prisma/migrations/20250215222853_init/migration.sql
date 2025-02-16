/*
  Warnings:

  - Added the required column `price` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Item` ADD COLUMN `price` DOUBLE NOT NULL,
    ADD COLUMN `quantity` INTEGER NOT NULL;
