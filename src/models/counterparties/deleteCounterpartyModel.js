const DBCONNECT = require("../../dbConnect.js");

module.exports = async function (table, counterpartyId) {
    return DBCONNECT.query(`DELETE FROM ${table} WHERE id = ${counterpartyId}`);
};
