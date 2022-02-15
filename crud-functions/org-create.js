// подключение базы данных
const DBCONNECT = require("../dbConnect.js");

module.exports = async function (req, res, table, foreignKey) {
    try {
        const {
            opf,
            orgname,
            inn,
            kpp = null,
            address,
            director = null,
            id,
        } = req.body;
        // проверяем не зарегистрирована ли уже такая организация
        console.log(foreignKey);
        console.log(opf, orgname, inn, kpp, address, director, id);
        const [rows] = await DBCONNECT(req, res).query(
            `SELECT * FROM ${table} WHERE inn = ${inn}`
        );
        // если зарегистрирована то отправляем ответ
        if (rows.length !== 0) {
            res.status(400).json({
                message: `Organization with INN ${inn} already exist`,
            });
            return;
        }
        // создаем организацию
        DBCONNECT(req, res)
            .query(
                `INSERT ${table}(${foreignKey}, createdAt, orgname, inn, kpp, address, director, opf) VALUES (${id}, NOW(),  "${orgname}", "${inn}", "${kpp}", "${address}", "${director}", "${opf}");`
            )
            .then(() => {
                //... ответ клиенту
                res.status(200).json({
                    created: true,
                    message: `You successfuly add ${orgname} ${inn}`,
                });
            })
            .catch((error) => {
                console.log(error);
                res.status(400).json({
                    message: error,
                });
            });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: error,
        });
    }
};
