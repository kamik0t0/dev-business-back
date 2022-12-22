// Роутинг личного кабинета
const Router = require("express");
const router = new Router();

const createOrgController = require("../controllers/organization/postOrgController.js");
const readOrgController = require("../controllers/organization/readOrgController.js");
const del = require("../controllers/organization/deleteOrgController.js");
const update = require("../controllers/organization/updateOrgController.js");
const authMiddleware = require("../middleware/authMiddleware.js");

router.post("/", authMiddleware, createOrgController);
router.get("/", authMiddleware, readOrgController);
router.delete("/", authMiddleware, del);
router.patch("/", authMiddleware, update);

module.exports = router;
