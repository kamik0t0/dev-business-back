const getUserById = require("../../models/user/getUserById");
const getUserTokenByToken = require("../../models/user/getUserTokenByToken");
const generateTokens = require("../../utils/getTokens");
// const updateUserToken = require("../../models/user/updateUserToken");
const jwt = require("jsonwebtoken");
const secret = require("../../config");

async function refreshService(accessToken, refreshToken) {
    // Если токне не передан то ошибка
    if (!refreshToken || !accessToken) throw new Error("User unauthorized");
    try {
        // Проверка access токена на валидность
        jwt.verify(accessToken, secret.access);
        // Если access token все еще действует возвращаем его
        return { access: accessToken };
    } catch (error) {
        // В случае данной ошибки следует сказать пользователю чтобы он залогинился заново
        console.log(17, error);
        // Получаем необходимые данные
        const { UserId, id, token } = await getUserTokenByToken(refreshToken);
        // Проверка access токена на валидность
        jwt.verify(refreshToken, secret.refresh);
        // Если нет токена из БД либо не передан аргументом то ошибка
        if (!refreshToken || !token) throw new Error("User unauthorized");
        // Получаем email пользователя для генерации token
        const { email } = await getUserById(UserId);
        // Генерация пары токенов из которых нужен только access
        const tokens = generateTokens(email, UserId);
        return { ...tokens, id };
    }
}

module.exports = refreshService;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkNhcF9ORU1PeDg2QGluYm94LnJ1IiwiaWQiOjU5LCJpYXQiOjE2NzE2MjYzNjcsImV4cCI6MTY3MTYyNjM4N30.FRWi2UhY-cgOfBXG73J1406BKNjqCdbY2SpegAcaFOI
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkNhcF9ORU1PeDg2QGluYm94LnJ1IiwiaWQiOjU5LCJpYXQiOjE2NzE2MjYzOTgsImV4cCI6MTY3MTYyNjQxOH0.U2WpP5kK_QKelLmo0kb8LU7l7lmu3H21KoML0UaAEtY
