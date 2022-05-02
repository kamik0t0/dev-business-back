const jwt = require("jsonwebtoken");
const { secret } = require("../config.js");

module.exports = function (req, res, next) {
    // если метод запроса options то вызывается следующий mw
    if (req.method === "OPTIONS") {
        next();
    }
    try {
        // получаем token из заголовка
        const token = req.headers.authorization.split(" ")[1];
        // если получили то сверяем с ключем
        jwt.verify(token, secret);
        next();
    } catch (error) {
        if (error.message === "jwt expired") {
            return res
                .status(401)
                .json({ error: new Error("Session expired, please login") });
        } else {
            next();
        }
    }
};
