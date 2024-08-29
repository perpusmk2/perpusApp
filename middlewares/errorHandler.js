const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err) {
    if (err.name === "ErrorNotFound") {
      res.status(404).json({ name: "ErrorNotFound", message: err.message });
    } else {
      res.status(500).json({ name: "ErrorInternal", message: err.message });
    }
  }
};

module.exports = errorHandler;
