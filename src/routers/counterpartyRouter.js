// Роутинг контрагентов
const Router = require("express");
const router = new Router();
const create = require("../crud-functions/create.js");
const read = require("../crud-functions/read.js");
const del = require("../crud-functions/delete.js");
const update = require("../crud-functions/update.js");

router.post("/", (req, res) => create(req, res, "Counterparties", "OrgsId"));
router.get("/", (req, res) => read(req, res, "Counterparties", "OrgsId"));
router.delete("/", (req, res) => del(req, res, "Counterparties", "orgId"));
router.patch("/", (req, res) => update(req, res, "Counterparties"));

module.exports = router;
