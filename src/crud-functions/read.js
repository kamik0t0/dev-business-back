// подключение базы данных
const getOrgsQuerry = require("./service/querries/read-querries/read-orgs-querry.js");
const getWaybillsQuerry = require("./service/querries/read-querries/read-waybills-querry.js");
// Запрос списка организаций по id пользователя
module.exports = async function (req, res, table, foreignKey) {
    console.log(table, foreignKey);
    switch (table) {
        case "Sales":
            getWaybillsQuerry(req, res, table, foreignKey);
            break;
        case "Purchases":
            getWaybillsQuerry(req, res, table, foreignKey);
            break;
        default:
            getOrgsQuerry(req, res, table, foreignKey);
    }
};
