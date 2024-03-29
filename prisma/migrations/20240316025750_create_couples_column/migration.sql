/*
  Warnings:

  - Added the required column `couple_id` to the `Padrinhos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Padrinhos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "couple_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_Padrinhos" ("code", "color", "email", "id", "name") SELECT "code", "color", "email", "id", "name" FROM "Padrinhos";
DROP TABLE "Padrinhos";
ALTER TABLE "new_Padrinhos" RENAME TO "Padrinhos";
CREATE UNIQUE INDEX "Padrinhos_code_key" ON "Padrinhos"("code");
CREATE UNIQUE INDEX "Padrinhos_email_key" ON "Padrinhos"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
