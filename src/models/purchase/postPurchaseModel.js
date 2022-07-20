const DBCONNECT = require("../../dbConnect.js");

module.exports = async function (
    data,
    OrgId,
    CounterpartyId,
    {
        summ,
        nds,
        total,
        waybill_date,
        myOrg,
        counterparty,
        cl_waybill_number,
    } = data
) {
    const { orgname, inn, kpp = null, address, opf } = myOrg,
        {
            orgname: cl_orgname,
            inn: cl_inn,
            kpp: cl_kpp = null,
            address: cl_address,
            opf: cl_opf,
        } = counterparty;

    return DBCONNECT.query(
        `INSERT Purchases(CounterpartyId, OrgId, createdAt, orgname, inn, kpp, address,opf, cl_orgname, cl_inn, cl_kpp, cl_address, cl_opf, summ, nds, total, waybill_date, cl_waybill_number) VALUES (${CounterpartyId}, ${OrgId}, NOW(), "${orgname}", "${inn}", "${kpp}", "${address}", "${opf}", "${cl_orgname}", "${cl_inn}", "${cl_kpp}", "${cl_address}", "${cl_opf}", "${summ}", "${nds}", "${total}", "${waybill_date.slice(
            0,
            -1
        )}", "${cl_waybill_number}");`
    );
};
