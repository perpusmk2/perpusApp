const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllGuru = async () => {
  const gurus = await prisma.guru.findMany();
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

const createGuru = async (data) => {
  console.log(data);
  const guru = await prisma.guru.create({ data });
  return guru;
};

const updateGuru = async (data) => {
  const { id, body } = data;
  const guru = await prisma.guru.update({
    where: {
      id,
    },
    data: body,
  });
  return guru;
};

const deleteGuru = async (id) => {
  const guru = await prisma.guru.deleteMany({
    where: {
      id,
    },
  });
  return guru;
};

module.exports = { getAllGuru, getGuru, createGuru, updateGuru };
