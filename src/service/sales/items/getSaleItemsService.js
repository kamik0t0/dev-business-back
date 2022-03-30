const getSaleItemsModel = require("../../../models/sales/items/getSaleItemsModel.js");

module.exports = async function (SaleId) {
    try {
        const [result] = await getSaleItemsModel(SaleId);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};
