const products = [];

const postAddProduct = (req, res, next) => {
  products.push({
    title: req.body.title,
  });
  res.redirect("/");
};

const getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
    forCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

const getProducts = (req, res, next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};

exports.postAddProduct = postAddProduct;
exports.getAddProduct = getAddProduct;
exports.getProducts = getProducts;
