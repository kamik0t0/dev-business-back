const readOrgModel = require("../../models/organization/readOrgModel.js");

module.exports = async function (UserId) {
    try {
        let [result] = await readOrgModel(UserId);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};
