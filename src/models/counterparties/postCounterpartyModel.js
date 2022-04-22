const DBCONNECT = require("../../dbConnect.js");

module.exports = async function (
    { OrgId, orgname, inn, kpp, address, director, opf },
    foreignKey
) {
    return DBCONNECT.query(
        `INSERT counterparties(${foreignKey}, createdAt, orgname, inn, kpp, address, director, opf) VALUES (${OrgId}, NOW(),  "${orgname}", "${inn}", "${kpp}", "${address}", "${director}", "${opf}");`
    );
};
