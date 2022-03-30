const readCounterpartyModel = require("../../models/counterparties/readCounterpartyModel.js");

module.exports = async function (OrgId) {
    try {
        let [result] = await readCounterpartyModel(OrgId);
        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};
