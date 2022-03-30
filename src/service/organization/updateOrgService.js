const updateOrgModel = require("../../models/organization/updateOrgModel.js");

module.exports = async function (data, table) {
    try {
        await updateOrgModel(data, table);
        return {
            updated: true,
            message: `You successfuly update`,
        };
    } catch (error) {
        throw new Error(error.message);
    }
};
