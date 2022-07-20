const DBCONNECT = require("../../../dbConnect.js");

module.exports = async function (SaleId, item) {
    return DBCONNECT.query(
        `INSERT sales_items (createdAt, SaleId, item_number, nomenclature, quantity, price, summ, nds_percent, nds, total) VALUES (NOW(), "${SaleId}", "${item.item_number}", "${item.nomenclature}", "${item.quantity}", "${item.price}", "${item.summ}", "${item.nds_percent}", "${item.nds}", "${item.total}");`
    );
};
