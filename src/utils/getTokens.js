// токен авторизации
const JWT = require("jsonwebtoken");
// импорт ключа
const tokens = require("../config");

function generateTokens(email, id) {
    const access = JWT.sign(
        {
            email,
            id,
        },
        tokens.access,
        { expiresIn: "20s" }
    );
    const refresh = JWT.sign(
        {
            email,
            id,
        },
        tokens.refresh,
        { expiresIn: "1m" }
    );
    return {
        auth: true,
        access,
        refresh,
        email,
    };
}

module.exports = generateTokens;
