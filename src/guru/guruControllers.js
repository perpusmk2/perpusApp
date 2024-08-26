const guruServices = require("./guruServices");

const getAllGuru = async (req, res) => {
  try {
    const guru = await guruServices.getAllGuru();
    res.send(guru);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllGuru };
