// Роутинг авторизации
const Router = require("express");
const router = new Router();
const formidable = require("express-formidable");
const regController = require("../controllers/authorization/regController.js");
const authController = require("../controllers/authorization/authController.js");
const recoverController = require("../controllers/authorization/recoverController.js");

// парсинг формы - formidable создает дополнительные поля в запросе req.fields
router.use(formidable());
router.post("/registration", regController);
router.post("/", authController);
router.patch("/forgot", recoverController);

module.exports = router;
