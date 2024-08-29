const guruRepo = require("./cmsGuruRepositories");

const getAllGuru = async () => {
  const gurus = await guruRepo.getAllGuru();
  return gurus;
};

const getGuru = async (params) => {
  const guru = await guruRepo.getGuru(params);
  return guru;
};

const createGuru = async (params) => {
  const guru = await guruRepo.createGuru(params);
  return guru;
};

const updateGuru = async (params) => {
  const guru = await guruRepo.updateGuru(params);
  return guru;
};

module.exports = { getAllGuru, getGuru, createGuru, updateGuru };
