const guruRepo = require("./cmsGuruRepositories");

// find all
const getAllGuru = async () => {
  const gurus = await guruRepo.getAllGuru();
  return gurus;
};

// find one
const getGuru = async (params) => {
  idValidation(params);
  const guru = await guruRepo.getGuru(params);
  if (!guru) {
    throw {
      name: "ErrorNotFound",
      message: `Data with id ${params} not found`,
    };
  }

  return guru;
};

// create one
const createOneGuru = async (params) => {
  namaValidation(params);
  const guru = await guruRepo.createOneGuru(params);
  return guru;
};

// create many
const createManyGuru = async (paramsArray) => {
  arrayValidation(paramsArray);
  for (const d of paramsArray) {
    namaValidation(d);
  }

  const guru = await guruRepo.createManyGuru(paramsArray);
  return guru;
};

// update
const updateGuru = async (params) => {
  await getGuru(params.id);
  namaValidation(params.body);
  const guru = await guruRepo.updateGuru(params);
  return guru;
};

// delete one
const deleteOneGuru = async (params) => {
  deleteValidation(params);
  await getGuru(params.id);
  const guru = await guruRepo.deleteOneGuru(params);
  return guru;
};

// delete many
const deleteManyGuru = async (paramsArray) => {
  arrayValidation(paramsArray);
  for (const d of paramsArray) {
    await getGuru(d);
  }
  const guru = await guruRepo.deleteManyGuru(paramsArray);
  return guru;
};

// array validation
function arrayValidation(params) {
  if (!Array.isArray(params)) {
    throw {
      name: "ErrorBadRequest",
      message: "Data must be an array",
    };
  }

  if (params.length === 0) {
    throw {
      name: "ErrorBadRequest",
      message: "Data must not be empty",
    };
  }
}

// nama validation
function namaValidation(params) {
  if (!("nama" in params)) {
    throw {
      name: "ErrorBadRequest",
      message: "Data must contain 'nama' key",
    };
  }

  if (typeof params.nama !== "string") {
    throw {
      name: "ErrorBadRequest",
      message: "Name must be a string",
    };
  }

  if (params.nama.length < 3) {
    throw {
      name: "ErrorBadRequest",
      message: "Name must be at least 3 characters",
    };
  }
}

// id validation
function idValidation(params) {
  if (typeof params !== "number" || isNaN(params) || params <= 0) {
    throw {
      name: "ErrorBadRequest",
      message: "id must be a valid positif number",
    };
  }
}

// delete validation
function deleteValidation(params) {
  if (!("id" in params)) {
    throw {
      name: "ErrorBadRequest",
      message: "Data must contain 'id' key",
    };
  }
}

module.exports = {
  getAllGuru,
  getGuru,
  createOneGuru,
  createManyGuru,
  updateGuru,
  deleteOneGuru,
  deleteManyGuru,
};
