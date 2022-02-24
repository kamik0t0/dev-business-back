// Роутинг личного кабинета
const Router = require("express");
const router = new Router();
const create = require("../crud-functions/create.js");
const read = require("../crud-functions/org-get.js");
const deleteOrg = require("../crud-functions/org-delete.js");
const updateOrg = require("../crud-functions/org-update.js");

router.post("/", (req, res) => create(req, res, "Purchases", "CounterpartyId"));
router.get("/", (req, res) => read(req, res, "Purchases", "CounterpartyId"));
router.delete("/", (req, res) => deleteOrg(req, res, "Purchases"));
router.patch("/", (req, res) => updateOrg(req, res, "Purchases"));

module.exports = router;
