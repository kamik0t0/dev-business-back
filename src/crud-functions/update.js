const updateOrgQuerry = require("./service/querries/update-querries/update-org-querry.js");
const updateSaleQuerry = require("./service/querries/update-querries/update-sale-querry.js");
const updatePurchaseQuerry = require("./service/querries/update-querries/update-purchase-querry.js");
module.exports = async function (req, res, table) {
    console.log(table);
    switch (table) {
        case "Sales":
            updateSaleQuerry(req, res, table);
            break;
        case "Purchases":
            updatePurchaseQuerry(req, res, table);
            break;
        default:
            updateOrgQuerry(req, res, table);
            break;
    }
};
