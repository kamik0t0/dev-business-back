const getPurchaseItemsModel = require("../../../models/purchase/items/getPurchaseItemsModel.js");

module.exports = async function (PurchaseId) {
    try {
        const [result] = await getPurchaseItemsModel(PurchaseId);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};
