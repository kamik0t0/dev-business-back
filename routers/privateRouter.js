// Роутинг личного кабинета
const Router = require("express");
const router = new Router();
const createOrg = require("../crud-functions/org-create.js");
const getOrgs = require("../crud-functions/org-get.js");
const deleteOrg = require("../crud-functions/org-delete.js");
const updateOrg = require("../crud-functions/org-update.js");

router.post("/", (req, res) => createOrg(req, res, "Orgs", "UserId"));
router.get("/", (req, res) => getOrgs(req, res, "Orgs", "UserId"));
router.delete("/", (req, res) => deleteOrg(req, res, "Orgs"));
router.patch("/", (req, res) => updateOrg(req, res, "Orgs"));

module.exports = router;