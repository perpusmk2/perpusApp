const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllGuru = async () => {
  const gurus = await prisma.guru.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return gurus;
};

const getGuru = async (id) => {
  const guru = await prisma.guru.findUnique({
    where: {
      id: +id,
    },
  });

  if (!guru) {
    throw {
      name: "ErrorNotFound",
      message: "Data not found",
    };
  }
  return guru;
};

module.exports = { getAllGuru, getGuru };
