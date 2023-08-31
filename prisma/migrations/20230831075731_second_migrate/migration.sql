/*
  Warnings:

  - You are about to drop the column `Grade` on the `Category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "Grade";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "grade" "Grade";
