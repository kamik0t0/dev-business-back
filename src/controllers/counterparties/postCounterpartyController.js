// создание организации
const createCounterpartyService = require("../../service/counterparties/postCounterpartyService.js");

module.exports = async function (req, res) {
    try {
        const data = req.body;
        const { foreignKey } = req.query;
        const result = await createCounterpartyService(data, foreignKey);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.messge });
    }
};
