const DBCONNECT = require("../../../dbConnect.js");

module.exports = async function (item) {
    return DBCONNECT.query(
        `UPDATE purchases_items SET item_number = "${item.number}", nomenclature = "${item.nomenclature}", quantity = ${item.quantity}, price = "${item.price}", summ = ${item.summ}, nds_percent = ${item.NDSprcnt}, nds = ${item.NDS}, total = ${item.total} WHERE id = ${item.id};`
    );
};
