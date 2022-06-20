// Роутинг личного кабинета
const Router = require("express");
const router = new Router();
const read = require("../controllers/purchase/items/getPurchaseItemsController.js");
const update = require("../controllers/purchase/updatePurchaseController.js");

router.get("/", read);
router.patch("/", update);

module.exports = router;
