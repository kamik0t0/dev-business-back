const readOrgService = require("../../service/organization/readOrgService.js");

module.exports = async function (req, res) {
    try {
        const { UserId } = req.query;
        const result = await readOrgService(UserId);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
