const DBCONNECT = require("../../dbConnect.js");

module.exports = async function (counterpartyId) {
    return DBCONNECT.query(
        `DELETE FROM counterparties WHERE id = ${counterpartyId}`
    );
};
