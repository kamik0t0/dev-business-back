const deleteCounterpartyModel = require("../../models/counterparties/deleteCounterpartyModel.js");

module.exports = async function (counterpartyId) {
    try {
        await deleteCounterpartyModel(counterpartyId);
        return {
            deleted: true,
            message: `Контрагент с id ${counterpartyId} успешно удалена`,
        };
    } catch (error) {
        throw new Error(error.message);
    }
};
