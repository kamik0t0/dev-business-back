// модуль для хеширования пароля
const bcrypt = require("bcryptjs");
const getUserModel = require("../../models/user/getUserModel.js");
const generateTokens = require("../../utils/getTokens.js");
const updateUserToken = require("../../models/user/updateUserToken");
const getUserToken = require("../../models/user/getUserToken");

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
        // получаем refreshToken id
        const { id: tokenId } = await getUserToken(id);
        // создание access и refresh tokens
        const tokens = generateTokens(email, id);
        // при авторизациии обновляется refresh token в БД
        await updateUserToken(tokens.refresh, tokenId);
        return { ...tokens, id };
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

module.exports = authService;
