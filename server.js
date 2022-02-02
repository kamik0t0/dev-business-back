const express = require("express");
const PORT = process.env.PORT || 5600;
const app = express();
const bodyParser = require("body-parser");
const authRouter = require("./authorization/authRouter.js");
const setHeaders = require("./middleware/headers.js");
const authMiddleware = require("./authorization/authMiddleware.js");
const privateRouter = require("./private-office/privateRouter.js");

// Заголовки:
app.use(setHeaders);

// обработка get запроса и отправка токена авторизации
app.get("/", authMiddleware);

// Парсинг JSON
app.use(bodyParser.json());

// Работа с авторизацией
app.use("/login", authRouter);

// Работа с личным кабинетом
app.use("/private", privateRouter);

// старт сервера
app.listen(PORT, () => console.log(`SERVER STARTS ON PORT ${PORT}`));
