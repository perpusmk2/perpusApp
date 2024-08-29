const guruServices = require("./guruServices");

const getAllGuru = async (req, res, next) => {
  try {
    const guru = await guruServices.getAllGuru();
    res.send(guru);
  } catch (error) {
    next(error);
  }
};

const getGuru = async (req, res, next) => {
  try {
    const params = req.params.id;
    const guru = await guruServices.getGuru(params);
    res.send(guru);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllGuru, getGuru };
