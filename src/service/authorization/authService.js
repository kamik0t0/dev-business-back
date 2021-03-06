// токен авторизации
const JWT = require("jsonwebtoken");
// модуль для хеширования пароля
const bcrypt = require("bcryptjs");
// импорт ключа
const { secret } = require("../../config.js");
const getUserModel = require("../../models/user/getUserModel.js");

// создание JWT
function setJWT(email, id) {
    console.log(email);
    return {
        auth: true,
        token: JWT.sign(
            {
                email,
                exp: Math.floor(Date.now() / 1000) * 60 * 1440,
            },
            secret
        ),
        message: "user " + email + " authorized",
        email,
        id,
    };
}
// Действия по авторизации
async function authService({ email: RequestedEmail, pass }) {
    try {
        // поиск пользователя
        const { password, id, email } = await getUserModel(RequestedEmail);
        // если пользователь не существует
        if (!id) throw new Error("Неправильный email");
        // сравнение паролей в БД и теле запроса
        const validPassword = bcrypt.compareSync(pass, password);
        // если пароль не валидный
        if (!validPassword) throw new Error("Неправильный пароль");
        // создание токена и дополнительных полей
        return setJWT(email, id);
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = authService;
