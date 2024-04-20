/*
  Warnings:

  - You are about to drop the column `thumbnailURL` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `videoURL` on the `Section` table. All the data in the column will be lost.
  - Added the required column `thumbnailKey` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoKey` to the `Section` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "thumbnailURL",
ADD COLUMN     "thumbnailKey" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Section" DROP COLUMN "videoURL",
ADD COLUMN     "videoKey" TEXT NOT NULL;
