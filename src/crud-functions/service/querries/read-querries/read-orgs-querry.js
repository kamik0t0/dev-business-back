const DBCONNECT = require("../../../../dbConnect.js");

module.exports = async function (req, res, table, foreignKey) {
    const id = req.query[foreignKey];
    DBCONNECT(req, res)
        .query(`SELECT * FROM ${table} WHERE ${foreignKey} = ${id}`)
        .then(([result]) => {
            return res.status(200).json(result);
        })
        .catch((error) => {
            console.log(error);
            return res.status(400).json({
                message: error,
            });
        });
};
