// создание сущностей
const isDuplicate = require("./service/isDuplicate.js");
const createOrgQuerry = require("./service/querries/create-querries/create-org-querry.js");
const createSaleQuerry = require("./service/querries/create-querries/create-sale-querry.js");
const createPurchaseQuerry = require("./service/querries/create-querries/create-purchase-querry.js");

module.exports = async function (
    req,
    res,
    table,
    foreignKey_1,
    foreignKey_2,
    { inn } = req.body
) {
    console.log(table);
    // в зависимости от таблицы выполняется соответствующая логика
    switch (table) {
        case "Sales":
            createSaleQuerry(req, res, table, foreignKey_1, foreignKey_2);
            break;
        case "Purchases":
            createPurchaseQuerry(req, res, table, foreignKey_1, foreignKey_2);
            break;
        default:
            // проверка на дубль по инн
            if (await isDuplicate(req, res, table)) {
                return res.status(400).json({
                    message: `Organization with INN ${inn} already exist`,
                });
            } else {
                createOrgQuerry(req, res, table, foreignKey_1);
            }
    }
};
