// подключение базы данных
const DBCONNECT = require("../dbConnect.js");
// модуль для хеширования пароля
const bcrypt = require("bcryptjs");
const mail = require("./mailer.js");

module.exports = async function (req, res) {
    try {
        const { email, pass } = req.fields;
        // Проверка существования пользователя
        let [rows] = await DBCONNECT().query(
            `SELECT * FROM Users WHERE email = "${email}"`
        );
        // если пользователь не существует...
        if (rows.length === 0) {
            //... сообщаем
            res.status(400).json({
                message: `Нет пользователя с таким email`,
            });
            return;
        }
        // проверка email
        await mail(email, pass)
            .then((info) => {
                console.log(`Email sent: `, info);
            })
            // хэш пароля
            .then(() => bcrypt.hash(pass, 7))
            // замена пароля
            .then((hashPassword) => {
                DBCONNECT().query(
                    `UPDATE Users SET password = "${hashPassword}" WHERE email = "${email}"`
                );
            })
            .then(() => {
                res.status(200).json({
                    message: `Пароль успешно изменен!`,
                    updated: true,
                });
            })

            .catch((error) => {
                console.log(error);
                res.status(400).json({
                    message: `Неверно указан e-mail. Попробуйте снова.`,
                });
            });
        // ответ клиенту
    } catch (error) {
        console.log(error);
    }
};
