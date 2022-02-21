// создание накладной продажи
const DBCONNECT = require("../../../dbConnect.js");

module.exports = async function (
    req,
    res,
    table,
    foreignKey,
    {
        wbItems,
        summ,
        NDS,
        total,
        date,
        myOrg,
        counterparty,
        counterpartyId,
    } = req.body
) {
    let { orgname, inn, kpp = null, address, opf } = myOrg,
        {
            orgname: cl_orgname,
            inn: cl_inn,
            kpp: cl_kpp = null,
            address: cl_address,
            opf: cl_opf,
        } = counterparty;

    DBCONNECT(req, res)
        // вставляем реквизиты накладной в таблицу sales
        .query(
            `INSERT ${table}(${foreignKey}, createdAt, orgname, inn, kpp, address,opf, cl_orgname, cl_inn, cl_kpp, cl_address, cl_opf, summ, nds, total, waybill_date) VALUES (${counterpartyId}, NOW(), "${orgname}", "${inn}", "${kpp}", "${address}", "${opf}", "${cl_orgname}", "${cl_inn}", "${cl_kpp}", "${cl_address}", "${cl_opf}", "${summ}", "${NDS}", "${total}", "${date.slice(
                0,
                -1
            )}");`
        )
        .then(([{ insertId }]) => {
            // выставляем каждую позиция в накладной в таблицу sales_items
            for (const item of wbItems) {
                DBCONNECT(req, res).query(
                    `INSERT sales_items (createdAt, SaleId, item_number, nomenclature, quantity, price, summ, nds_percent, nds, total) VALUES (NOW(), "${insertId}", "${item.number}", "${item.nomenclature}", "${item.quantity}", "${item.price}", "${item.summ}", "${item.NDSprcnt}", "${item.NDS}", "${item.total}");`
                );
            }
        })
        .catch((error) => {
            return res.status(400).json({
                message: error,
            });
        });
};