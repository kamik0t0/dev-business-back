const updateOrgQuerry = require("./service/querries/update-querries/update-org-querry.js");
const updateWaybillQuerry = require("./service/querries/update-querries/update-waybill-querry.js");

module.exports = async function (req, res, table) {
    switch (table) {
        case "Sales":
            updateWaybillQuerry(req, res, table, "sales_items", "SaleId");
            break;
        case "Purchases":
            updateWaybillQuerry(
                req,
                res,
                table,
                "purchases_items",
                "PurchaseId"
            );
            break;
        default:
            updateOrgQuerry(req, res, table);
            break;
    }
};
