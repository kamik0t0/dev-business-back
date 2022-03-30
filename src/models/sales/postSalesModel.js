const DBCONNECT = require("../../dbConnect.js");

module.exports = async function (
    data,
    OrgId,
    CounterpartyId,
    { summ, NDS, total, date, myOrg, counterparty } = data
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
        `INSERT Sales(CounterpartyId, OrgId, createdAt, orgname, inn, kpp, address,opf, cl_orgname, cl_inn, cl_kpp, cl_address, cl_opf, summ, nds, total, waybill_date) VALUES (${CounterpartyId}, ${OrgId}, NOW(), "${orgname}", "${inn}", "${kpp}", "${address}", "${opf}", "${cl_orgname}", "${cl_inn}", "${cl_kpp}", "${cl_address}", "${cl_opf}", "${summ}", "${NDS}", "${total}", "${date.slice(
            0,
            -1
        )}");`
    );
};
