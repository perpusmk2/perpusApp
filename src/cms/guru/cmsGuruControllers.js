const guruServices = require("./cmsGuruServices");

// find all
const getAllGuru = async (req, res, next) => {
  try {
    const guru = await guruServices.getAllGuru();
    res.status(200).json({ message: "get All success", data: guru });
  } catch (error) {
    next(error);
  }
};

// find one
const getGuru = async (req, res, next) => {
  try {
    const params = +req.params.id;
    console.log(params);
    const guru = await guruServices.getGuru(params);
    res.status(200).json({ message: "get success", data: guru });
  } catch (error) {
    next(error);
  }
};

// create
const createGuru = async (req, res, next) => {
  try {
    const params = req.body;
    if (Array.isArray(params)) {
      const guru = await guruServices.createManyGuru(params);
      res.status(200).json({ message: "create Many success", data: guru });
    } else {
      const guru = await guruServices.createOneGuru(params);
      res.status(200).json({ message: "create success", data: guru });
    }
  } catch (error) {
    next(error);
  }
};

// update
const updateGuru = async (req, res, next) => {
  try {
    const params = {
      id: +req.params.id,
      body: req.body,
    };
    const guru = await guruServices.updateGuru(params);
    res.status(200).json({ message: "update success", data: guru });
  } catch (error) {
    next(error);
  }
};

// delete
const deleteGuru = async (req, res, next) => {
  try {
    const params = req.body;
    if (Array.isArray(params)) {
      const guru = await guruServices.deleteManyGuru(params);
      res.status(200).json({ message: "delete Many success", data: guru });
    } else {
      const guru = await guruServices.deleteOneGuru(params);
      res.status(200).json({ message: "delete success", data: guru });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllGuru, getGuru, createGuru, updateGuru, deleteGuru };
