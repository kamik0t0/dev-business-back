const DBCONNECT = require("../../../dbConnect.js");

module.exports = async function (PurchaseId, item) {
    return DBCONNECT.query(
        `INSERT Purchases_items (createdAt, PurchaseId, item_number, nomenclature, quantity, price, summ, nds_percent, nds, total) VALUES (NOW(), "${PurchaseId}", "${item.item_number}", "${item.nomenclature}", "${item.quantity}", "${item.price}", "${item.summ}", "${item.nds_percent}", "${item.nds}", "${item.total}");`
    );
};
