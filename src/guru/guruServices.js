const guruRepo = require("./guruRepositories");

const getAllGuru = async () => {
  const gurus = await guruRepo.getAllGuru();
  return gurus;
};

module.exports = { getAllGuru };
