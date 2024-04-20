/*
  Warnings:

  - You are about to drop the column `duration` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the `Answer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `answers` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_questionId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_studentId_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "duration",
DROP COLUMN "studentId",
DROP COLUMN "tags",
ALTER COLUMN "outcomes" SET NOT NULL,
ALTER COLUMN "outcomes" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "answers" TEXT NOT NULL;

-- DropTable
DROP TABLE "Answer";
