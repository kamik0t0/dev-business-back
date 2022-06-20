// Роутинг личного кабинета
const Router = require("express");
const router = new Router();
const post = require("../controllers/purchase/postPurchaseController.js");
const read = require("../controllers/purchase/getPurchaseController.js");
const del = require("../controllers/purchase/deletePurchaseController.js");

router.post("/", post);
router.get("/", read);
router.delete("/", del);

module.exports = router;
