const getUserById = require("../../models/user/getUserById");
const getUserTokenByToken = require("../../models/user/getUserTokenByToken");
const generateTokens = require("../../utils/getTokens");
// const updateUserToken = require("../../models/user/updateUserToken");
const jwt = require("jsonwebtoken");
const { refresh } = require("../../config");

async function refreshService(refreshToken) {
    // Если токне не передан то ошибка
    if (!refreshToken) throw new Error("User unauthorized");
    // Проверка refresh токена на валидность и срок его действия
    jwt.verify(refreshToken, refresh);
    // Получаем необходимые данные
    const { UserId, id, token } = await getUserTokenByToken(refreshToken);
    // Если нет токена из БД либо не передан аргументом то ошибка
    if (!refreshToken || !token) throw new Error("User unauthorized");
    // Получаем email пользователя для генерации token
    const { email } = await getUserById(UserId);
    // Генерация пары токенов
    const tokens = generateTokens(email, UserId);
    // await updateUserToken(tokens.refresh, id);
    return { ...tokens, id };
}

module.exports = refreshService;
