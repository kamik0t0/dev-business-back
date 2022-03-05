const DBCONNECT = require("../../../../dbConnect.js");
// функция формирует строку запроса для обновления данных только по измененным полям
/* Изменению подлежат данные о сумме (summ), НДС(NDS), сумме+НДС(total), дате (Waybill_date), контрагенте (counterparty),   */
module.exports = function (
    req,
    res,
    table,
    {
        id = null,
        NDS: nds = null,
        Waybill_date: waybill_date = null,
        counterparty,
        counterpartyId: CounterpartyId = null,
        positions: updatePurchase_items,
        summ = null,
        total = null,
    } = req.body
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
    // создаем накладную
    DBCONNECT(req, res)
        .query(
            updatePurchaseQuerry(
                table,
                id,
                { nds: nds },
                { waybill_date: waybill_date },
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
                { cl_orgname: cl_orgname }
            )
        )
        .then(async () => {
            const [purchase_items] = await DBCONNECT(req, res).query(
                `Select * from purchases_items where PurchaseId = ${id}`
            );

            let idArray = [];
            purchase_items.forEach((oldItem) => {
                idArray.push(oldItem.id);
            });

            let idUpdateArray = [];
            updatePurchase_items.forEach((newItem) => {
                idUpdateArray.push(newItem.id);
            });

            for (const item of updatePurchase_items) {
                // если id итерируемой накладной уже есть в БД - обновление данных
                if (idArray.includes(item.id)) {
                    DBCONNECT(req, res).query(
                        `UPDATE purchases_items SET item_number = "${item.number}", nomenclature = "${item.nomenclature}", quantity = ${item.quantity}, price = "${item.price}", summ = ${item.summ}, nds_percent = ${item.NDSprcnt}, nds = ${item.NDS}, total = ${item.total} WHERE id = ${item.id};`
                    );
                    // иначе создание новой записи
                } else if (!idArray.includes(item.id) && item.id === null) {
                    DBCONNECT(req, res).query(
                        `INSERT purchases_items (createdAt, PurchaseId, item_number, nomenclature, quantity, price, summ, nds_percent, nds, total) VALUES (NOW(), "${id}", "${item.number}", "${item.nomenclature}", "${item.quantity}", "${item.price}", "${item.summ}", "${item.NDSprcnt}", "${item.NDS}", "${item.total}");`
                    );
                }
            }
            // если позиции удалялись - удаление записи
            idArray.forEach((id) => {
                if (!idUpdateArray.includes(id)) {
                    DBCONNECT(req, res).query(
                        `DELETE FROM purchases_items WHERE id = ${id}`
                    );
                }
            });
        })
        .then(() => {
            return res.status(200).json({
                updated: true,
                message: `You successfuly update`,
            });
        })
        .catch((error) => {
            console.log(error);
            return res.status(400).json({
                message: error,
            });
        });
};

function updatePurchaseQuerry(table, id, ...args) {
    let queryParams = args
        .filter((obj) => Object.values(obj)[0] !== null)
        .map((obj) =>
            `"${[Object.keys(obj)]} = "${[Object.values(obj)]}""`.slice(1, -1)
        )
        .join(", ");

    return `UPDATE ${table} SET ${queryParams} WHERE id = ${id};`;
}
