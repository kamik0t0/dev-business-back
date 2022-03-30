const DBCONNECT = require("../../dbConnect.js");

module.exports = async function (id) {
    return DBCONNECT.query(`SELECT * FROM Sales WHERE OrgId = ${id}`);
};
