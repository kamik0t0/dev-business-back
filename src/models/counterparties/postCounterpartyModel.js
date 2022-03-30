const DBCONNECT = require("../../dbConnect.js");

module.exports = async function (
    { id, orgname, inn, kpp, address, director, opf },
    table,
    foreignKey
) {
    return DBCONNECT.query(
        `INSERT ${table}(${foreignKey}, createdAt, orgname, inn, kpp, address, director, opf) VALUES (${id}, NOW(),  "${orgname}", "${inn}", "${kpp}", "${address}", "${director}", "${opf}");`
    );
};
