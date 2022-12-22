const express = require("express");
const PORT = process.env.PORT || 5600;
const app = express();
const bodyParser = require("body-parser");
const authRouter = require("./routers/authRouter.js");
const setHeaders = require("./middleware/headers.js");
const authMiddleware = require("./middleware/authMiddleware.js");
const privateRouter = require("./routers/privateRouter.js");
const counterpartyRouter = require("./routers/counterpartyRouter.js");
const salesRouter = require("./routers/salesRouter.js");
const saleItemRouter = require("./routers/saleItemsRouter.js");
const purchasesRouter = require("./routers/purchasesRouter.js");
const purchaseItemRouter = require("./routers/purchaseItemRouter.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Заголовки:
// app.use(setHeaders);
// Печеньки
app.use(cookieParser());
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);
// // Проверка токена клиента
// app.use(authMiddleware);
// Парсинг JSON
app.use(bodyParser.json());
// Работа с авторизацией
app.use("/login", authRouter);
// Работа с личным кабинетом
app.use("/private", privateRouter);
// Работа с контрагентами
app.use("/counterparty", counterpartyRouter);
// Работа с продажами
app.use("/sales", salesRouter);
// Запрос на позиции накладоной реализации
app.use("/sales/*", saleItemRouter);
// Работа с покупками
app.use("/purchases", purchasesRouter);
// Запрос на позиции накладоной поступления
app.use("/purchases/*", purchaseItemRouter);
// старт сервера
app.listen(PORT, () => console.log(`SERVER STARTS ON PORT ${PORT}`));
