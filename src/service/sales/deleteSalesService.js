const deleteSalesModel = require("../../models/sales/deleteSalesModel.js");

module.exports = async function (SaleId) {
    try {
        await deleteSalesModel(SaleId);
        return {
            deleted: true,
            message: `Продажа с id ${SaleId} успешно удалена`,
        };
    } catch (error) {
        throw new Error(error.message);
    }
};
