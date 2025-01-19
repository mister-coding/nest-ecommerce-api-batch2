-- AlterTable
ALTER TABLE "payment" ADD COLUMN     "amount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "deleted_at" TIMESTAMP(3);
