const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("Starting to seed the database...");

  await prisma.guru.createMany({
    data: [
      { nama: "Farida Rahim, S.Pd" },
      { nama: "Fitrianty Koem, M.Pd" },
      { nama: "Yuddystira Natalia Manarat, S.Pd" },
    ],
  });

  await prisma.buku.createMany({
    data: [
      {
        judul: "Dasar-Dasar Kecantikan dan Spa",
        pengarang: "Dwi Ermavianti W.S., S.Pd. M.Pd. CIAR.",
        ISBN: "978-623-01-2873-8",
        jilid: "1",
        stok: 5,
        penerbit: "Andi",
        kelas: "10",
        semester: "1",
        edisi: "2022",
        tanggal_terima: new Date("2023-11-13"),
        sumber_dana_bos: "Dana BOS 2023",
        harga: 104500,
      },
      {
        judul: "Dasar-Dasar Kecantikan dan Spa",
        pengarang: "Dwi Ermavianti W.S., S.Pd. M.Pd. CIAR.",
        ISBN: "978-623-01-2874-5",
        jilid: "1",
        stok: 5,
        penerbit: "Andi",
        kelas: "10",
        semester: "2",
        tanggal_terima: new Date("2023-11-13"),
        sumber_dana_bos: "Dana BOS 2023",
        harga: 138500,
      },
    ],
  });

  console.log("Database seeding completed successfully");
}

main()
  .catch((e) => {
    console.error("Failed to seed the database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
