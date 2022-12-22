// Роутинг авторизации
const Router = require("express");
const router = new Router();
const formidable = require("express-formidable");
const regController = require("../controllers/authorization/regController");
const authController = require("../controllers/authorization/authController");
const recoverController = require("../controllers/authorization/recoverController");
const refreshController = require("../controllers/authorization/refreshController");
const checkAuthController = require("../controllers/authorization/checkAuthController");

// парсинг формы - formidable создает дополнительные поля в запросе req.fields
router.use(formidable());
router.post("/registration", regController);
router.post("/", authController);
router.post("/forgot", recoverController);
router.get("/refresh", refreshController);
router.get("/checkAuth", checkAuthController);

module.exports = router;
