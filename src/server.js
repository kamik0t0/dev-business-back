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
const purchasesRouter = require("./routers/purchasesRouter.js");
const saleItemRouter = require("./routers/saleItemsRouter.js");
const purchaseItemRouter = require("./routers/purchaseItemRouter.js");

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
// Работа с контрагентами
app.use("/counterparty", counterpartyRouter);
// Работа с продажами
app.use("/sales", salesRouter);
// Работа с продажами
app.use("/purchases", purchasesRouter);
// Работа с продажами
app.use("/sale", saleItemRouter);
// Работа с продажами
app.use("/purchase", purchaseItemRouter);
// старт сервера
app.listen(PORT, () => console.log(`SERVER STARTS ON PORT ${PORT}`));
