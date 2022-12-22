// Обновление
const DBCONNECT = require("../../dbConnect.js");
const makeUpdateOrgQuery = require("../../utils/makeUpdageOrgQuery.js");

module.exports = async function (
    {
        nds = null,
        waybill_date = null,
        cl_acc = null,
        cl_address = null,
        cl_bank = null,
        cl_bik = null,
        cl_inn,
        cl_korr = null,
        cl_kpp = null,
        cl_opf = null,
        cl_orgname = null,
        CounterpartyId = null,
        summ = null,
        total = null,
        cl_waybill_number = null,
    } = data,
    table,
    id
) {
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
