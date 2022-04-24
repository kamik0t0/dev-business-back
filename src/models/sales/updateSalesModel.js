// Обновление
const DBCONNECT = require("../../dbConnect.js");
const makeUpdateOrgQuery = require("../../utils/makeUpdageOrgQuery.js");

module.exports = async function (
    data,
    table,
    id,
    {
        NDS: nds = null,
        waybill_date = null,
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
};
