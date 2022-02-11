// подключение базы данных
const DBCONNECT = require("../dbConnect.js");
// Запрос списка организаций по id пользователя
module.exports = async function (req, res, table, foreignKey) {
    try {
        const id = req.query[foreignKey];
        const [result] = await DBCONNECT(req, res).query(
            `SELECT * FROM ${table} WHERE ${foreignKey} = ${id}`
        );
        await res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
};
