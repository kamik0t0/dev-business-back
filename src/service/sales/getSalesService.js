const getSalesModel = require("../../models/sales/getSalesModel.js");

module.exports = async function (OrgId) {
    try {
        const [result] = await getSalesModel(OrgId);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};
