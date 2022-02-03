// подключение базы данных
const DBCONNECT = require("../dbConnect.js");

module.exports = async function (req, res) {
    try {
        // получаем данные
        const {
            email,
            opf,
            orgname,
            inn,
            kpp = null,
            address,
            director = null,
        } = req.body;
        // ищем пользователя с нужным email
        const [user] = await DBCONNECT(req, res).query(
            `SELECT * FROM Users WHERE email = "${email}"`
        );
        // если не находим то завершаем функцию (но такая ситуация не очень вероятно, поскольку создать организацию может лишь авторизованный пользователь)
        if (user.length === 0) {
            res.status(400).json({
                message: `No user with email ${email}`,
            });
            return;
        }
        // id пользователя с полученным email
        const id = user[0].id;
        // проверяем не зарегистрирована ли уже такая организация
        const [rows] = await DBCONNECT(req, res).query(
            `SELECT * FROM Orgs WHERE inn = ${inn}`
        );
        if (rows.length !== 0) {
            res.status(400).json({
                message: `Organization with INN ${inn} already exist`,
            });
            return;
        }
        // создаем организацию
        DBCONNECT(req, res)
            .query(
                `INSERT Orgs(UserId, createdAt, orgname, inn, kpp, address, director, opf) VALUES (${id}, NOW(),  "${orgname}", "${inn}", "${kpp}", "${address}", "${director}", "${opf}");`
            )
            .catch((error) => {
                console.log(error);
                res.status(400).json({
                    message: error,
                });
            });
        //... ответ клиенту
        res.status(200).json({
            created: true,
            message: `You successfuly add ${orgname} ${inn}`,
        });
    } catch (error) {
        console.log(error);
    }
};
