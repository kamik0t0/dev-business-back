const DBCONNECT = require("../../dbConnect.js");

module.exports = async function (
    {
        summ,
        nds,
        total,
        waybill_date,
        orgname,
        inn,
        kpp = null,
        address,
        opf,
        cl_orgname,
        cl_inn,
        cl_kpp = null,
        cl_address,
        cl_opf,
    } = data,
    OrgId,
    CounterpartyId
) {
    return DBCONNECT.query(
        `INSERT Sales(CounterpartyId, OrgId, createdAt, orgname, inn, kpp, address,opf, cl_orgname, cl_inn, cl_kpp, cl_address, cl_opf, summ, nds, total, waybill_date) VALUES (${CounterpartyId}, ${OrgId}, NOW(), "${orgname}", "${inn}", "${kpp}", "${address}", "${opf}", "${cl_orgname}", "${cl_inn}", "${cl_kpp}", "${cl_address}", "${cl_opf}", "${summ}", "${nds}", "${total}", "${waybill_date.slice(
            0,
            -1
        )}");`
    );
};
