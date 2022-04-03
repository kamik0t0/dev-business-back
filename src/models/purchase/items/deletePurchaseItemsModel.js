const DBCONNECT = require("../../../dbConnect.js");

module.exports = async function (id) {
    return DBCONNECT.query(`DELETE FROM purchases_items WHERE id = ${id}`);
};
