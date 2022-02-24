// Роутинг авторизации
const Router = require("express");
const router = new Router();
const formidable = require("express-formidable");
const registration = require("./registration.js");
const authorization = require("../authorization/authorization.js");
const forgot = require("./forgot.js");

// парсинг формы - formidable создает дополнительные поля в запросе req.fields
router.use(formidable());
// обработка login/registration
router.post("/registration", registration);
// обработка login/
router.post("/", authorization);
// обработка login/forgot
router.patch("/forgot", forgot);

module.exports = router;
