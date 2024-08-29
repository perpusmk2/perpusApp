const bookServices = require("./bookServices");

const getAllBooks = async (req, res) => {
  try {
    const books = await bookServices.getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllBooks };
