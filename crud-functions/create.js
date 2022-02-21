// создание сущностей
const isDuplicate = require("./service/isDuplicate.js");
const createOrgQuerry = require("./service/querries/create-org-querry.js");
const createSaleQuerry = require("./service/querries/create-sale-querry.js");

module.exports = async function (
    req,
    res,
    table,
    foreignKey,
    { inn } = req.body
) {
    // в зависимости от таблицы выполняется соответствующая логика
    switch (table) {
        case "Sales":
            createSaleQuerry(req, res, table, foreignKey).then(() => {
                return res.status(200).json({
                    created: true,
                    message: `You successfuly add new Waybill`,
                });
            });
            break;
        default:
            // проверка на дубль по инн
            if (await isDuplicate(req, res, table)) {
                return res.status(400).json({
                    message: `Organization with INN ${inn} already exist`,
                });
            } else {
                createOrgQuerry(req, res, table, foreignKey).then(() => {
                    return res.status(200).json({
                        created: true,
                        message: `You successfuly add new Organization with INN ${inn}`,
                    });
                });
            }
    }
};
