// Роутинг контрагентов
const Router = require("express");
const router = new Router();
const create = require("../crud-functions/create.js");
const getOrgs = require("../crud-functions/org-get.js");
const deleteOrg = require("../crud-functions/org-delete.js");
const updateOrg = require("../crud-functions/org-update.js");

router.post("/", (req, res) => create(req, res, "Counterparties", "OrgsId"));
router.get("/", (req, res) => getOrgs(req, res, "Counterparties", "OrgsId"));
router.delete("/", (req, res) => deleteOrg(req, res, "Counterparties"));
router.patch("/", (req, res) => updateOrg(req, res, "Counterparties"));

module.exports = router;
