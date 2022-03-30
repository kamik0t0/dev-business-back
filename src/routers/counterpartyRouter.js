// Роутинг контрагентов
const Router = require("express");
const router = new Router();
const create = require("../controllers/counterparties/postCounterpartyController.js");
const read = require("../controllers/counterparties/readCounterpartyController.js");
const del = require("../controllers/counterparties/deleteCounterpartyController.js");
const update = require("../controllers/counterparties/updateCounterpartyController.js");

router.post("/", create);
router.get("/", read);
router.delete("/", del);
router.patch("/", update);

module.exports = router;
