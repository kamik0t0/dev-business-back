const DBCONNECT = require("../../dbConnect.js");

module.exports = async function (PurchaseId) {
    return DBCONNECT.query(`DELETE FROM Purchases WHERE id = ${PurchaseId}`);
};
