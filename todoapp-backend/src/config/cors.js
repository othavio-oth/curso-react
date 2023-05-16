module.exports = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,OPTIONS,PATCH,DELETE"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, X-Custom-Header");
  next();
};
