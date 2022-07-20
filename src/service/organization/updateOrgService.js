const updateOrgModel = require("../../models/organization/updateOrgModel.js");

module.exports = async function (data, table) {
    try {
        const info = await updateOrgModel(data, table);
        console.log(info);
        return {
            updated: true,
            message: `You successfuly update`,
        };
    } catch (error) {
        throw new Error(error.message);
    }
};
