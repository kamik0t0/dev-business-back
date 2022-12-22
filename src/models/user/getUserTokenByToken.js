const DBCONNECT = require("../../dbConnect.js");

module.exports = async (token) => {
    let [rows] = await DBCONNECT.query(
        `SELECT * FROM tokens WHERE token = "${token}"`
    );
    if (!rows.length) return null;
    return rows[0];
};
