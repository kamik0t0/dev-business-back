// Роутинг личного кабинета
const Router = require("express");
const router = new Router();
const create = require("../crud-functions/org-create.js");
const getOrgs = require("../crud-functions/org-get.js");
const delOrg = require("../crud-functions/org-delete.js");
const patchOrg = require("../crud-functions/org-update.js");

// обработка private/create
router.post("/", (req, res) => create(req, res, "Orgs"));
// обработка private
router.get("/", (req, res) => getOrgs(req, res, "Orgs"));
// обработка private
router.delete("/", (req, res) => delOrg(req, res, "Orgs"));
// обработка private
router.patch("/", (req, res) => patchOrg(req, res, "Orgs"));

module.exports = router;
