const deleteOrgModel = require("../../models/organization/deleteOrgModel.js");

module.exports = async function (table, id) {
    try {
        await deleteOrgModel(table, id);
        return {
            deleted: true,
            message: `Организация с id ${id} успешно удалена`,
        };
    } catch (error) {
        throw new Error(error.message);
    }
};
