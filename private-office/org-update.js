// подключение базы данных
const DBCONNECT = require("../dbConnect.js");

module.exports = async function (req, res) {
    try {
        // получаем данные
        let {
            upINN,
            email,
            opf = null,
            orgname = null,
            inn = null,
            kpp = null,
            director = null,
            address = null,
        } = req.body;
        // console.log(upINN, email, opf, orgname, inn, kpp, director, address);
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
        console.log(id);
        // проверяем есть ли организация в БД
        const [rows] = await DBCONNECT(req, res).query(
            `SELECT * FROM Orgs WHERE inn = ${upINN}`
        );
        console.log(rows);
        if (rows.length === 0) {
            res.status(400).json({
                message: `No organization with INN ${upINN}`,
            });
            return;
        }

        function makeQuery(...args) {
            let params = args
                .filter((obj) => Object.values(obj)[0] !== null)
                .map((obj) =>
                    `"${[Object.keys(obj)]} = "${[Object.values(obj)]}""`.slice(
                        1,
                        -1
                    )
                );
            params.join(", ");

            return `UPDATE Orgs SET ${params} WHERE inn = ${upINN}`;
        }

        // создаем организацию
        DBCONNECT(req, res)
            .query(
                makeQuery(
                    { orgname: orgname },
                    { inn: inn },
                    { kpp: kpp },
                    { address: address },
                    { director: director },
                    { opf: opf }
                )
            )
            .then(() => {
                res.status(200).json({
                    updated: true,
                    message: `You successfuly update`,
                });
            })
            .catch((error) => {
                console.log(error);
                res.status(400).json({
                    message: error,
                });
            });
        //... ответ клиенту
    } catch (error) {
        console.log(error);
    }
};
