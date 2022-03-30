// Роутинг личного кабинета
const Router = require("express");
const router = new Router();
const create = require("../controllers/sales/postSalesController.js");
const read = require("../controllers/sales/getSalesController.js");
const del = require("../controllers/sales/deleteSalesController.js");
const update = require("../controllers/sales/updateSalesController.js");

router.post("/", create);
router.get("/", read);
router.delete("/", del);
router.patch("/", update);

module.exports = router;
