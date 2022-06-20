// Роутинг личного кабинета
const Router = require("express");
const router = new Router();
const create = require("../controllers/sales/postSalesController.js");
const read = require("../controllers/sales/getSalesController.js");
const del = require("../controllers/sales/deleteSalesController.js");

router.post("/", create);
router.get("/", read);
router.delete("/", del);

module.exports = router;
