// подключение базы данных
const getOrgsQuerry = require("./service/querries/read-querries/read-orgs-querry.js");
const getSalesQuerry = require("./service/querries/read-querries/read-sales-querry.js");
const getPurchasesQuerry = require("./service/querries/read-querries/read-purchases-querry.js");
// Запрос списка организаций по id пользователя
module.exports = async function (req, res, table, foreignKey) {
    switch (table) {
        case "Sales":
            getSalesQuerry(req, res, table, foreignKey);
            break;
        case "Purchases":
            getPurchasesQuerry(req, res, table, foreignKey);
            break;
        default:
            getOrgsQuerry(req, res, table, foreignKey);
    }
};
