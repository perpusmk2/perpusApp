const guruRepo = require("./guruRepositories");

const getAllGuru = async () => {
  const gurus = await guruRepo.getAllGuru();
  return gurus;
};

const getGuru = async (params) => {
  const guru = await guruRepo.getGuru(params);
  return guru;
};

module.exports = { getAllGuru, getGuru };
