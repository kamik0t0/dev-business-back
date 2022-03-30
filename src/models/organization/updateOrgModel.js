const DBCONNECT = require("../../dbConnect.js");
const makeUpdateOrgQuery = require("../../utils/makeUpdageOrgQuery.js");

module.exports = async function (data, table) {
    let {
        id,
        opf = null,
        orgname = null,
        inn = null,
        kpp = null,
        director = null,
        address = null,
    } = data;
    // создаем организацию
    return DBCONNECT.query(
        makeUpdateOrgQuery(
            table,
            id,
            { orgname: orgname },
            { inn: inn },
            { kpp: kpp },
            { address: address },
            { director: director },
            { opf: opf }
        )
    );
};
