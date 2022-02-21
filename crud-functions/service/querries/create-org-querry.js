// создание организации
const DBCONNECT = require("../../../dbConnect.js");

module.exports = async function (
    req,
    res,
    table,
    foreignKey,
    { id, orgname, inn, kpp = null, address, director = null, opf } = req.body
) {
    DBCONNECT(req, res)
        .query(
            `INSERT ${table}(${foreignKey}, createdAt, orgname, inn, kpp, address, director, opf) VALUES (${id}, NOW(),  "${orgname}", "${inn}", "${kpp}", "${address}", "${director}", "${opf}");`
        )
        .catch((error) => {
            return res.status(400).json({
                message: error,
            });
        });
};
