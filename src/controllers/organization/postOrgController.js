// создание организации
const createOrgService = require("../../service/organization/postOrgService.js");

module.exports = async function (req, res) {
    try {
        const data = req.body;
        const { table, foreignKey } = req.query;
        const result = await createOrgService(data, table, foreignKey);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.messge });
    }
};
