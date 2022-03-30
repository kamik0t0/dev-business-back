const DBCONNECT = require("../../../dbConnect.js");

module.exports = async function (id) {
    DBCONNECT.query(`DELETE FROM sales_items WHERE id = ${id}`);
};
