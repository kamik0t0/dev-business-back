const DBCONNECT = require("../../../dbConnect.js");

module.exports = async function (SaleId, item) {
    DBCONNECT.query(
        `INSERT sales_items (createdAt, SaleId, item_number, nomenclature, quantity, price, summ, nds_percent, nds, total) VALUES (NOW(), "${SaleId}", "${item.number}", "${item.nomenclature}", "${item.quantity}", "${item.price}", "${item.summ}", "${item.NDSprcnt}", "${item.NDS}", "${item.total}");`
    );
};
