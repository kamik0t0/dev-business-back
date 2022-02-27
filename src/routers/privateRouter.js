// Роутинг личного кабинета
const Router = require("express");
const router = new Router();
const create = require("../crud-functions/create.js");
const read = require("../crud-functions/read.js");
const del = require("../crud-functions/delete.js");
const update = require("../crud-functions/update.js");

router.post("/", (req, res) => create(req, res, "Orgs", "UserId"));
router.get("/", (req, res) => read(req, res, "Orgs", "UserId"));
router.delete("/", (req, res) => del(req, res, "Orgs", "orgId"));
router.patch("/", (req, res) => update(req, res, "Orgs"));

module.exports = router;
