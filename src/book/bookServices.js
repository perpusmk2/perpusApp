const bookRepo = require("./bookRepositories");

const getAllBooks = async () => {
  return await bookRepo.getAllBooks();
};

module.exports = { getAllBooks };
