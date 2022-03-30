const updateOrgService = require("../../service/organization/updateOrgService.js");

module.exports = async function (req, res) {
    try {
        const data = req.body;
        const { table } = req.query;
        const result = await updateOrgService(data, table);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
