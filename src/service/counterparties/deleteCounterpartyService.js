const deleteCounterpartyModel = require("../../models/counterparties/deleteCounterpartyModel.js");

module.exports = async function (table, counterpartyId) {
    try {
        await deleteCounterpartyModel(table, counterpartyId);
        return {
            deleted: true,
            message: `Контрагент с id ${counterpartyId} успешно удалена`,
        };
    } catch (error) {
        throw new Error(error.message);
    }
};
