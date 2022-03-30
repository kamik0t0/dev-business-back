const createCounterpartyModel = require("../../models/counterparties/postCounterpartyModel.js");

module.exports = async function (
    data,
    table,
    foreignKey,
    { inn, orgname } = data
) {
    try {
        await createCounterpartyModel(data, table, foreignKey);
        return {
            created: true,
            message: `Организация ${orgname} с ИНН ${inn} создана`,
        };
    } catch (error) {
        throw new Error(error.message);
    }
};
