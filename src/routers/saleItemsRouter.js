// Роутинг личного кабинета
const Router = require("express");
const router = new Router();
const read = require("../crud-functions/read.js");

router.get("/", (req, res) => read(req, res, "sales_items", "SaleId"));

module.exports = router;
