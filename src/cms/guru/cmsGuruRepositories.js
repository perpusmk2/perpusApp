const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// find all
const getAllGuru = async () => {
  const gurus = await prisma.guru.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return gurus;
};

// find one
const getGuru = async (id) => {
  const guru = await prisma.guru.findUnique({
    where: {
      id: id,
    },
  });
  return guru;
};

// create one
const createOneGuru = async (data) => {
  const { nama } = data;
  const guru = await prisma.guru.create({
    data: {
      nama,
    },
  });
  return guru;
};

// create many
const createManyGuru = async (data) => {
  const guru = await prisma.guru.createMany({
    data: data,
  });
  return guru;
};

// update
const updateGuru = async (data) => {
  const { id, body } = data;
  const { nama } = body;

  const guru = await prisma.guru.update({
    where: {
      id: +id,
    },
    data: body,
  });
  return guru;
};

// delete one
const deleteOneGuru = async (data) => {
  const { id } = data;
  const guru = await prisma.guru.delete({
    where: {
      id: +id,
    },
  });
  return guru;
};

// delete many
const deleteManyGuru = async (ids) => {
  console.log(ids);
  const guru = await prisma.guru.deleteMany({
    where: {
      id: {
        in: ids,
      },
    },
  });
  return guru;
};

module.exports = {
  getAllGuru,
  getGuru,
  createOneGuru,
  createManyGuru,
  updateGuru,
  deleteOneGuru,
  deleteManyGuru,
};
