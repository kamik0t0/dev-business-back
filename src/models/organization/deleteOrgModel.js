const DBCONNECT = require("../../dbConnect.js");

module.exports = async function (table, id) {
    return DBCONNECT.query(`DELETE FROM ${table} WHERE id = ${id}`);
};
