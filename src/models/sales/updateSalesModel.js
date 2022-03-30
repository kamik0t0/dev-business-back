// Обновление
const DBCONNECT = require("../../dbConnect.js");
const makeUpdateOrgQuery = require("../../utils/makeUpdageOrgQuery.js");

module.exports = async function (
    data,
    table,
    items,
    itemIdName,
    {
        id = null,
        NDS: nds = null,
        Waybill_date: waybill_date = null,
        counterparty,
        counterpartyId: CounterpartyId = null,
        positions: update_items,
        summ = null,
        total = null,
        cl_waybill_number = null,
    } = data
) {
    let {
        acc: cl_acc = null,
        address: cl_address = null,
        bank: cl_bank = null,
        bik: cl_bik = null,
        inn: cl_inn,
        korr: cl_korr = null,
        kpp: cl_kpp = null,
        opf: cl_opf = null,
        orgname: cl_orgname = null,
    } = counterparty;

    return DBCONNECT.query(
        makeUpdateOrgQuery(
            table,
            id,
            { nds: nds },
            { waybill_date: waybill_date.slice(0, -1) },
            { cl_acc: cl_acc },
            { cl_address: cl_acc },
            { cl_bank: cl_bank },
            { cl_bik: cl_bik },
            { cl_inn: cl_inn },
            { cl_korr: cl_korr },
            { cl_kpp: cl_kpp },
            { cl_opf: cl_opf },
            { cl_orgname: cl_orgname },
            { CounterpartyId: CounterpartyId },
            { summ: summ },
            { total: total },
            { cl_acc: cl_acc },
            { cl_address: cl_address },
            { cl_bank: cl_bank },
            { cl_bik: cl_bik },
            { cl_inn: cl_inn },
            { cl_korr: cl_korr },
            { cl_kpp: cl_kpp },
            { cl_opf: cl_opf },
            { cl_orgname: cl_orgname },
            { cl_waybill_number: cl_waybill_number }
        )
    );
    // .then(async () => {
    //     // получаем товары из накладной
    //     const [itemsInDB] = await DBCONNECT.query(
    //         `Select * from ${items} where ${itemIdName} = ${id}`
    //     );

    //     // создаем массив из id товаров в накладной полученных из БД
    //     let idArray = [];
    //     itemsInDB.forEach((oldItem) => {
    //         idArray.push(oldItem.id);
    //     });

    //     for (const item of update_items) {
    //         // если id итерируемой накладной уже есть в БД - обновление данных
    //         if (idArray.includes(item.id)) {
    //             DBCONNECT.query(
    //                 `UPDATE sales_items SET item_number = "${item.number}", nomenclature = "${item.nomenclature}", quantity = ${item.quantity}, price = "${item.price}", summ = ${item.summ}, nds_percent = ${item.NDSprcnt}, nds = ${item.NDS}, total = ${item.total} WHERE id = ${item.id};`
    //             );
    //             // если id итерируемой накладной отсутствует в БД - создание новой записи
    //         } else if (!idArray.includes(item.id) && item.id === null) {
    //             DBCONNECT.query(
    //                 `INSERT sales_items (createdAt, ${itemIdName}, item_number, nomenclature, quantity, price, summ, nds_percent, nds, total) VALUES (NOW(), "${id}", "${item.number}", "${item.nomenclature}", "${item.quantity}", "${item.price}", "${item.summ}", "${item.NDSprcnt}", "${item.NDS}", "${item.total}");`
    //             );
    //         }
    //     }

    //     // создаем массив из id товаров пришедших от клиента
    //     let idUpdateArray = [];
    //     update_items.forEach((newItem) => {
    //         idUpdateArray.push(newItem.id);
    //     });

    //     // если позиция удалена - удаление записи
    //     idArray.forEach((id) => {
    //         if (!idUpdateArray.includes(id)) {
    //             DBCONNECT.query(`DELETE FROM ${items} WHERE id = ${id}`);
    //         }
    //     });
    // });
};
