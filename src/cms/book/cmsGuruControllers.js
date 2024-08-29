const guruServices = require("./cmsGuruServices");
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

const createGuru = async (req, res, next) => {
  try {
    const params = req.body;
    const guru = await guruServices.createGuru(params);
    res.send(guru);
  } catch (error) {
    next(error);
  }
};

const updateGuru = async (req, res, next) => {
  try {
    const params = {
      id: +req.params.id,
      body: req.body,
    };
    console.log(params);
    const guru = await guruServices.updateGuru(params);
    res.send(guru);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllGuru, getGuru, createGuru, updateGuru };
