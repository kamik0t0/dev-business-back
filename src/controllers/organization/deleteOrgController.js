const deleteOrgService = require("../../service/organization/deleteOrgService.js");

module.exports = async function (req, res) {
    try {
        const { orgId, table } = req.query;
        const result = await deleteOrgService(table, orgId);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
