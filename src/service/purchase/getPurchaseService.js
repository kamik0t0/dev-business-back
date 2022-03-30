const getPurchaseModel = require("../../models/Purchase/getPurchaseModel.js");

module.exports = async function (OrgId) {
    try {
        const [result] = await getPurchaseModel(OrgId);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};
