// Роутинг личного кабинета
const Router = require("express");
const router = new Router();
const create = require("../crud-functions/create.js");
const read = require("../crud-functions/read.js");
const del = require("../crud-functions/delete.js");
const update = require("../crud-functions/update.js");

router.post("/", (req, res) =>
    create(req, res, "Purchases", "CounterpartyId", "OrgId")
);
router.get("/", (req, res) => read(req, res, "Purchases", "OrgId"));
router.delete("/", (req, res) => del(req, res, "Purchases", "purchasesId"));
router.patch("/", (req, res) => update(req, res, "Purchases", "purchasesId"));

module.exports = router;
