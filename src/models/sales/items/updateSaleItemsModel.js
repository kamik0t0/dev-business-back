const DBCONNECT = require("../../../dbConnect.js");

module.exports = async function (item) {
    return DBCONNECT.query(
        `UPDATE sales_items SET item_number = "${item.item_number}", nomenclature = "${item.nomenclature}", quantity = ${item.quantity}, price = "${item.price}", summ = ${item.summ}, nds_percent = ${item.nds_percent}, nds = ${item.nds}, total = ${item.total} WHERE id = ${item.id};`
    );
};
