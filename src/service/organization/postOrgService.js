const isDuplicate = require("../../handlers/isDuplicate.js");
const createOrgModel = require("../../models/organization/postOrgModel.js");

module.exports = async function (
    data,
    table,
    foreignKey,
    { inn, orgname } = data
) {
    try {
        if (await isDuplicate(inn, table))
            throw new Error(`Организация с ИНН ${inn} уже зарегистрирована`);

        await createOrgModel(data, table, foreignKey);
        return {
            created: true,
            message: `Организация ${orgname} с ИНН ${inn} создана`,
        };
    } catch (error) {
        throw new Error(error.message);
    }
};
