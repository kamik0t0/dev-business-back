const deletePurchaseModel = require("../../models/purchase/deletePurchaseModel.js");

module.exports = async function (PurchaseId) {
    try {
        await deletePurchaseModel(PurchaseId);
        return {
            deleted: true,
            message: `Продажа с id ${PurchaseId} успешно удалена`,
        };
    } catch (error) {
        throw new Error(error.message);
    }
};
