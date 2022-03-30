// Роутинг личного кабинета
const Router = require("express");
const router = new Router();

const createOrgController = require("../controllers/organization/postOrgController.js");
const readOrgController = require("../controllers/organization/readOrgController.js");
const del = require("../controllers/organization/deleteOrgController.js");
const update = require("../controllers/organization/updateOrgController.js");

router.post("/", createOrgController);
router.get("/", readOrgController);
router.delete("/", del);
router.patch("/", update);

module.exports = router;
