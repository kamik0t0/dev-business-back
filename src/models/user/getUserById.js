const DBCONNECT = require("../../dbConnect.js");

module.exports = async (id) => {
    let [rows] = await DBCONNECT.query(
        `SELECT * FROM Users WHERE id = "${id}"`
    );
    if (!rows.length) return { id: false };
    return rows[0];
};
