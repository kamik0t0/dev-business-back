const jwt = require("jsonwebtoken");
const { secret } = require("./config.js");

module.exports = function (req, res, next) {
    // если метод запроса options то вызывается следующий mw
    if (req.method === "OPTIONS") {
        next();
    }

    try {
        // получаем token из заголовка
        const token = req.headers.authorization.split(" ")[1];
        // если токен не получен, то сообщаем
        if (!token) {
            return res.status(400).json({ message: "User not authorized" });
        }
        // если получили то сверяем с ключем
        jwt.verify(token, secret);
        // отправляем ответ клиенту
        res.status(200).json({ auth: true, token, message: "user authorized" });
        // в случае ошибки предлагаем авторизоваться
    } catch (error) {
        return res.status(400).json({ message: "Please login" });
    }
};
