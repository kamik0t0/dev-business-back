// Роутинг личного кабинета
const Router = require("express");
const router = new Router();
const getSaleItemsController = require("../controllers/sales/items/getSaleItemsController.js");

router.get("/", getSaleItemsController);

module.exports = router;
