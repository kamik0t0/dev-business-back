const DBCONNECT = require("../../../../dbConnect.js");

module.exports = async function (req, res, table, DelId) {
    console.log(table, DelId);
    DBCONNECT(req, res)
        .query(
            `DELETE FROM ${table}
        WHERE
            id = ${DelId}`
        )
        .then(() => {
            return res.status(200).json({
                deleted: true,
                message: `Item with id ${DelId} deleted`,
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({
                message: error,
            });
        });
};
