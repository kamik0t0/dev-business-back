const DBCONNECT = require("../../dbConnect.js");

module.exports = async (UserId) => {
    let [rows] = await DBCONNECT.query(
        `SELECT * FROM tokens WHERE UserId = "${UserId}"`
    );
    if (!rows.length) return null;
    return rows[0];
};
