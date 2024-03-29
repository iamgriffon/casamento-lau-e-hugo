-- CreateTable
CREATE TABLE "Padrinhos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Padrinhos_code_key" ON "Padrinhos"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Padrinhos_email_key" ON "Padrinhos"("email");
