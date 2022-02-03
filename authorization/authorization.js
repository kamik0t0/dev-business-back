// подключение базы данных
const DBCONNECT = require("../dbConnect.js");
// токен авторизации
const JWT = require("jsonwebtoken");
// модуль для хеширования пароля
const bcrypt = require("bcryptjs");
// импорт ключа
const { secret } = require("./config.js");

module.exports = async function (req, res) {
    try {
        console.log(req.get("host"));
        const { email, pass } = req.fields;
        // поиск пользователя
        let [rows] = await DBCONNECT(req, res)
            .query(`SELECT * FROM Users WHERE email = "${email}"`)
            .catch((err) => {
                console.log(err);
                res.status(400).json({ message: err });
            });
        // если пользователь не существует...
        if (rows.length === 0) {
            //... сообщаем
            res.status(400).json({
                message: `Неправильный пароль или e-mail.`,
            });
            return;
        }
        // получаем пароль из тела запроса
        const { password, id } = rows[0];
        // сравнение паролей в БД и теле запроса
        const validPassword = bcrypt.compareSync(pass, password);
        // если пароль не валидный возвращается соответствующий ответ
        if (!validPassword) {
            return res.status(400).json({
                message: `Неправильный пароль или e-mail.`,
            });
        }
        // создание token
        const token = JWT.sign(
            { email, exp: Math.floor(Date.now() / 1000) + 60 * 1440 },
            secret
        );
        // если пользователь существует - авторизация
        const response = {
            token,
            auth: true,
            message: "user " + email + " authorized",
            id,
        };
        // ответ клиенту
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
};
