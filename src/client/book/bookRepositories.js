const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllBooks = async () => {
  const books = await prisma.buku.findMany();
  return books;
};

module.exports = { getAllBooks };
