// Роутинг личного кабинета
const Router = require("express");
const router = new Router();
const read = require("../controllers/purchase/items/getPurchaseItemsController.js");

router.get("/", read);

module.exports = router;
