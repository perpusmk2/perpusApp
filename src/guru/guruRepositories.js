const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllGuru = async () => {
  const gurus = await prisma.guru.findMany();
  return gurus;
};

module.exports = { getAllGuru };
