// подключение базы данных
const DBCONNECT = require("../dbConnect.js");

module.exports = async function (req, res, table) {
    try {
        const DELORGID = req.query.orgId;
        await DBCONNECT(req, res)
            .query(
                `DELETE FROM ${table} 
                WHERE
                    id = ${DELORGID}`
            )
            .catch((error) => {
                console.log(error);
                res.status(400).json({
                    message: error,
                });
            });

        res.status(200).json({
            deleted: true,
            message: `Org with id ${DELORGID} deleted`,
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: error,
        });
    }
};
