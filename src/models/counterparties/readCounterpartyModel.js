const DBCONNECT = require("../../dbConnect.js");

module.exports = async (OrgId) => {
    return DBCONNECT.query(
        `SELECT * FROM Counterparties WHERE OrgsId = ${OrgId}`
    );
};
