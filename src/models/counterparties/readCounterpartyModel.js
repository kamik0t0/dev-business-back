const DBCONNECT = require("../../dbConnect.js");

module.exports = async function (OrgId) {
    return DBCONNECT.query(
        `SELECT * FROM Counterparties WHERE OrgsId = ${OrgId}`
    );
};
