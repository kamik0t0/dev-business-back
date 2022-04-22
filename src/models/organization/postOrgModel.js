const DBCONNECT = require("../../dbConnect.js");

module.exports = async function (
    { UserId, orgname, inn, kpp, address, director, opf },
    table,
    foreignKey
) {
    return DBCONNECT.query(
        `INSERT ${table}(${foreignKey}, createdAt, orgname, inn, kpp, address, director, opf) VALUES (${UserId}, NOW(),  "${orgname}", "${inn}", "${kpp}", "${address}", "${director}", "${opf}");`
    );
};
