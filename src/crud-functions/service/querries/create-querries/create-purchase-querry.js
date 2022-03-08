// создание накладной покупки
const DBCONNECT = require("../../../../dbConnect.js");

module.exports = async function (
    req,
    res,
    table,
    CounterpartyId_Key,
    OrgId_Key,
    {
        positions,
        summ,
        NDS,
        total,
        date,
        myOrg,
        counterparty,
        counterpartyId,
        orgId,
        cl_waybill_number,
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
    console.log(cl_waybill_number);
    DBCONNECT(req, res)
        // вставляем реквизиты накладной в таблицу purchases
        .query(
            `INSERT ${table}(${CounterpartyId_Key}, ${OrgId_Key}, createdAt, orgname, cl_waybill_number, inn, kpp, address,opf, cl_orgname, cl_inn, cl_kpp, cl_address, cl_opf, summ, nds, total, waybill_date) VALUES (${counterpartyId}, ${orgId}, NOW(), "${orgname}", "${cl_waybill_number}", "${inn}", "${kpp}", "${address}", "${opf}", "${cl_orgname}", "${cl_inn}", "${cl_kpp}", "${cl_address}", "${cl_opf}", "${summ}", "${NDS}", "${total}", "${date.slice(
                0,
                -1
            )}");`
        )
        .then(([{ insertId }]) => {
            // выставляем каждую позиция в накладной в таблицу purchases_items
            for (const item of positions) {
                DBCONNECT(req, res).query(
                    `INSERT purchases_items (createdAt, PurchaseId, item_number,  nomenclature, quantity, price, summ, nds_percent, nds, total) VALUES (NOW(), "${insertId}", "${item.number}", "${item.nomenclature}", "${item.quantity}", "${item.price}", "${item.summ}", "${item.NDSprcnt}", "${item.NDS}", "${item.total}");`
                );
            }
        })
        .then(() => {
            return res.status(200).json({
                created: true,
                message: `You successfuly add new Organization with INN ${inn}`,
            });
        })
        .catch((error) => {
            return res.status(400).json({
                message: error,
            });
        });
};
