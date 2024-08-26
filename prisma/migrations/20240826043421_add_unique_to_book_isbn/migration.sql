/*
  Warnings:

  - A unique constraint covering the columns `[ISBN]` on the table `Buku` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Buku_ISBN_key" ON "Buku"("ISBN");
