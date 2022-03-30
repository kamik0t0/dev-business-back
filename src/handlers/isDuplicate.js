// проверка дублирования организации
const DBCONNECT = require("../dbConnect.js");

async function isDuplicate(inn, table) {
    const [rows] = await DBCONNECT.query(
        `SELECT * FROM ${table} WHERE inn = ${inn}`
    );

    if (Object.keys(rows).length === 0) return false;
    return true;
}

module.exports = isDuplicate;
