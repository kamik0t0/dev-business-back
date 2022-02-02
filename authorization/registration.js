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
        console.log(rows);
        // Если существует сообщаем клиенту
        if (rows.length !== 0) {
            res.status(400).json({
                message: `User with email ${email} already exist`,
            });
            return;
        }
        // Добавление
        await mail(email, pass)
            .then((info) => {
                console.log(`Email sent: `, info);
            }) // хеш пароля в асинхронном режиме который возвращает промис (есть синхронный вариант)
            .then(() => bcrypt.hash(pass, 7))
            //... создается
            .then((hashPassword) => {
                DBCONNECT().query(
                    `INSERT Users(createdAt, email, password) VALUES(NOW(),"${email}", "${hashPassword}")`
                );
            })
            .then(() => {
                res.status(200).json({
                    registered: true,
                    message: `You successfuly registered with email ${email}`,
                });
            })

            .catch((error) => {
                console.log(error);
                res.status(400).json({
                    message: `Неверно указан e-mail. Попробуйте снова.`,
                });
            });
    } catch (error) {
        console.log(error);
    }
};
