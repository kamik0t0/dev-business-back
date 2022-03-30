const DBCONNECT = require("../../../dbConnect.js");

module.exports = async function (id) {
    return DBCONNECT.query(
        `SELECT * FROM purchases_items WHERE PurchaseId = ${id}`
    );
};
