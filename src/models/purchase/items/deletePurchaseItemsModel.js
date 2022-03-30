const DBCONNECT = require("../../../dbConnect.js");

module.exports = async function (id) {
    DBCONNECT.query(`DELETE FROM purchases_items WHERE id = ${id}`);
};
