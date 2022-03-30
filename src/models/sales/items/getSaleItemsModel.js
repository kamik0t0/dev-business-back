const DBCONNECT = require("../../../dbConnect.js");

module.exports = async function (id) {
    return DBCONNECT.query(`SELECT * FROM sales_items WHERE SaleId = ${id}`);
};
