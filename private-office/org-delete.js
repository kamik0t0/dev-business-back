// подключение базы данных
const DBCONNECT = require("../dbConnect.js");

module.exports = async function (req, res) {
    try {
        // получаем данные

        if (req.query.orgname) {
            const DELORG = req.query.orgname;
            console.log(DELORG);
            const [result] = await DBCONNECT().query(
                `SELECT 
            orgname
        FROM
            Orgs
        WHERE
            Orgs.orgname = "${DELORG}"`
            );
            console.log(result);
            if (result.length === 0) {
                res.status(400).json({
                    message: `No user with orgname ${DELORG}`,
                });
                return;
            }

            const [{ orgname }] = result;
            console.log(orgname);
            await DBCONNECT()
                .query(
                    `DELETE FROM Orgs 
                WHERE
                    orgname = "${orgname}"`
                )

                .catch((error) => {
                    console.log(error);
                    res.status(400).json({
                        message: error,
                    });
                });

            res.status(200).json({
                deleted: true,
                message: `${orgname} deleted`,
            });
        }
    } catch (err) {
        console.log(err);
    }
};
