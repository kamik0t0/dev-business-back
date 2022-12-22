const getPurchaseModel = require("../../models/purchase/getPurchaseModel.js");

module.exports = async function (OrgId) {
    try {
        const [result] = await getPurchaseModel(OrgId);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};
