// Роутинг личного кабинета
const Router = require("express");
const router = new Router();
const create = require("../private-office/org-create.js");
const getOrgs = require("./org-get.js");
const delOrg = require("./org-delete.js");
const patchOrg = require("./org-update.js");

// обработка private/create
router.post("/", create);
// обработка private
router.get("/", getOrgs);
// обработка private
router.delete("/", delOrg);
// обработка private
router.patch("/", patchOrg);

module.exports = router;
