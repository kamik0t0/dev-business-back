const DBCONNECT = require("../../dbConnect.js");

module.exports = async function (hashPassword, email) {
    return DBCONNECT.query(
        `INSERT Users(createdAt, email, password) VALUES(NOW(),"${email}", "${hashPassword}")`
    );
};
