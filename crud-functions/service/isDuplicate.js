// проверка дублирования организации
const DBCONNECT = require("../../dbConnect.js");

module.exports = async function (req, res, table, { inn } = req.body) {
    const [rows] = await DBCONNECT(req, res).query(
        `SELECT * FROM ${table} WHERE inn = ${inn}`
    );
    // если зарегистрирована то отправляем ответ
    if (rows.length !== 0) return true;
};
