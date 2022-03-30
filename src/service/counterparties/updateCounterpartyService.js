const updateCounterpartyModel = require("../../models/counterparties/updateCounterpartyModel.js");

module.exports = async function (data, table) {
    try {
        await updateCounterpartyModel(data, table);
        return {
            updated: true,
            message: `You successfuly update`,
        };
    } catch (error) {
        throw new Error(error.message);
    }
};
