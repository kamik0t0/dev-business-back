// Обновление
const DBCONNECT = require("../../../../dbConnect.js");

module.exports = function (
    req,
    res,
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
    // console.log(req.body);
    // создаем накладную
    DBCONNECT(req, res)
        .query(
            updateWaybillQuerry(
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
        )
        .then(async () => {
            // получаем товары из накладной
            const [itemsInDB] = await DBCONNECT(req, res).query(
                `Select * from ${items} where ${itemIdName} = ${id}`
            );

            // создаем массив из id товаров в накладной полученных из БД
            let idArray = [];
            itemsInDB.forEach((oldItem) => {
                idArray.push(oldItem.id);
            });

            for (const item of update_items) {
                // если id итерируемой накладной уже есть в БД - обновление данных
                if (idArray.includes(item.id)) {
                    DBCONNECT(req, res).query(
                        `UPDATE ${items} SET item_number = "${item.number}", nomenclature = "${item.nomenclature}", quantity = ${item.quantity}, price = "${item.price}", summ = ${item.summ}, nds_percent = ${item.NDSprcnt}, nds = ${item.NDS}, total = ${item.total} WHERE id = ${item.id};`
                    );
                    // если id итерируемой накладной отсутствует в БД - создание новой записи
                } else if (!idArray.includes(item.id) && item.id === null) {
                    DBCONNECT(req, res).query(
                        `INSERT ${items} (createdAt, ${itemIdName}, item_number, nomenclature, quantity, price, summ, nds_percent, nds, total) VALUES (NOW(), "${id}", "${item.number}", "${item.nomenclature}", "${item.quantity}", "${item.price}", "${item.summ}", "${item.NDSprcnt}", "${item.NDS}", "${item.total}");`
                    );
                }
            }

            // создаем массив из id товаров пришедших от клиента
            let idUpdateArray = [];
            update_items.forEach((newItem) => {
                idUpdateArray.push(newItem.id);
            });

            // если позиция удалена - удаление записи
            idArray.forEach((id) => {
                if (!idUpdateArray.includes(id)) {
                    DBCONNECT(req, res).query(
                        `DELETE FROM ${items} WHERE id = ${id}`
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

// функция формирует строку запроса для обновления данных
function updateWaybillQuerry(table, id, ...args) {
    let querryString = args
        .filter((obj) => Object.values(obj)[0] !== null)
        .map((obj) =>
            `"${[Object.keys(obj)]} = "${[Object.values(obj)]}""`.slice(1, -1)
        )
        .join(", ");

    return `UPDATE ${table} SET ${querryString} WHERE id = ${id};`;
}
