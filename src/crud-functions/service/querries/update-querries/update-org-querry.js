const DBCONNECT = require("../../../../dbConnect.js");
// функция формирует строку запроса для обновления данных
module.exports = function (req, res, table) {
    let {
        upINN,
        opf = null,
        orgname = null,
        inn = null,
        kpp = null,
        director = null,
        address = null,
    } = req.body;
    // создаем организацию
    DBCONNECT(req, res)
        .query(
            updateOrgQuerry(
                table,
                upINN,
                { orgname: orgname },
                { inn: inn },
                { kpp: kpp },
                { address: address },
                { director: director },
                { opf: opf }
            )
        )
        .then(() => {
            res.status(200).json({
                updated: true,
                message: `You successfuly update`,
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({
                message: error,
            });
        });
};

function updateOrgQuerry(table, inn, ...args) {
    let queryParams = args
        .filter((obj) => Object.values(obj)[0] !== null)
        .map((obj) =>
            `"${[Object.keys(obj)]} = "${[Object.values(obj)]}""`.slice(1, -1)
        )
        .join(", ");

    return `UPDATE ${table} SET ${queryParams} WHERE inn = ${inn}`;
}
