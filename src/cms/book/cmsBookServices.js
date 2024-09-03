const bookRepo = require("./cmsBookRepositories");

// find all
const getAllBooks = async () => {
  const books = await bookRepo.getAllBook();
  return books;
};

const getBook = async (id) => {
  const book = await bookRepo.getBook(+id);
  return book;
};

module.exports = { getAllBooks, getBook };
