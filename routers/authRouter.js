// Роутинг авторизации
const Router = require("express");
const router = new Router();
const formidable = require("express-formidable");
const registration = require("../authorization/registration.js");
const authorization = require("../authorization/authorization.js");
const forgot = require("../authorization/forgot.js");

// парсинг формы - formidable создает дополнительные поля в запросе req.fields
router.use(formidable());
router.post("/registration", registration);
router.post("/", authorization);
router.patch("/forgot", forgot);

module.exports = router;
