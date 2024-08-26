-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "Guru" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guru_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Buku" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "pengarang" TEXT,
    "ISBN" TEXT,
    "jilid" TEXT,
    "image" TEXT,
    "stok" INTEGER NOT NULL,
    "penerbit" TEXT,
    "kelas" TEXT,
    "semester" TEXT,
    "edisi" TEXT,
    "tanggal_terima" TIMESTAMP(3),
    "sumber_dana_bos" TEXT,
    "harga" INTEGER,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Buku_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaksi" (
    "id" SERIAL NOT NULL,
    "guru_id" INTEGER NOT NULL,
    "buku_id" INTEGER NOT NULL,
    "nama_siswa" TEXT NOT NULL,
    "kelas" TEXT NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "kembali" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaksi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Akun" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Akun_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transaksi" ADD CONSTRAINT "Transaksi_guru_id_fkey" FOREIGN KEY ("guru_id") REFERENCES "Guru"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaksi" ADD CONSTRAINT "Transaksi_buku_id_fkey" FOREIGN KEY ("buku_id") REFERENCES "Buku"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
