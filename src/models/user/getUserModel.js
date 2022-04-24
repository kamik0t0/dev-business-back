const DBCONNECT = require("../../dbConnect.js");

module.exports = async (email) => {
    let [rows] = await DBCONNECT.query(
        `SELECT * FROM Users WHERE email = "${email}"`
    );
    if (!rows.length) return { id: false };
    return rows[0];
};
