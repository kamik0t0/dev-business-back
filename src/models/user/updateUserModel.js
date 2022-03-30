const DBCONNECT = require("../../dbConnect.js");

module.exports = async function (hashPassword, email) {
    return DBCONNECT.query(
        `UPDATE Users SET password = "${hashPassword}" WHERE email = "${email}"`
    );
};
