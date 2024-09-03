const bookServices = require("./cmsBookServices");

const getAllBooks = async (req, res) => {
  try {
    const books = await bookServices.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookServices.getBook(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllBooks, getBook };
