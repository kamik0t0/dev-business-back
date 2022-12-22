const DBCONNECT = require("../../dbConnect.js");

module.exports = async function (token, UserId) {
    return DBCONNECT.query(
        `INSERT tokens(createdAt, token, UserId) VALUES(NOW(),"${token}", "${UserId}")`
    );
};
