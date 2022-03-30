const DBCONNECT = require("../../dbConnect.js");

module.exports = async function (UserId) {
    return DBCONNECT.query(`SELECT * FROM Orgs WHERE UserId = ${UserId}`);
};
