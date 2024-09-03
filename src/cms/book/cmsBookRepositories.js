const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// find all
const getAllBook = async () => {
  const books = await prisma.buku.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return books;
};

// find one
const getBook = async (id) => {
  const book = await prisma.buku.findUnique({
    where: {
      id: id,
    },
  });
  return book;
};

module.exports = { getAllBook, getBook };
