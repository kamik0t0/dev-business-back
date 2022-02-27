// Роутинг личного кабинета
const Router = require("express");
const router = new Router();
const create = require("../crud-functions/create.js");
const read = require("../crud-functions/read.js");
const del = require("../crud-functions/delete.js");
const update = require("../crud-functions/update.js");

router.post("/", (req, res) =>
    create(req, res, "Sales", "CounterpartyId", "OrgId")
);
router.get("/", (req, res) => read(req, res, "Sales", "OrgId"));
router.delete("/", (req, res) => del(req, res, "Sales", "salesId"));
router.patch("/", (req, res) => update(req, res, "Sales", "salesId"));

module.exports = router;
