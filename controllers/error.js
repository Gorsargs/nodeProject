const path = require("path");
const rootDir = require("../util/path");
const get404 = (req, res) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
};

exports.get404 = get404;
