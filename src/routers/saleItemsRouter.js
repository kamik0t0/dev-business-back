// Роутинг личного кабинета
const Router = require("express");
const router = new Router();
const getSaleItemsController = require("../controllers/sales/items/getSaleItemsController.js");
const update = require("../controllers/sales/updateSalesController.js");

router.get("/", getSaleItemsController);
router.patch("/", update);

module.exports = router;
