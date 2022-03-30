const DBCONNECT = require("../../dbConnect.js");

module.exports = async function (SaleId) {
    return DBCONNECT.query(`DELETE FROM Sales WHERE id = ${SaleId}`);
};
