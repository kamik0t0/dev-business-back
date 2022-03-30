// создание организации
const createCounterpartyService = require("../../service/counterparties/postCounterpartyService.js");

module.exports = async function (req, res) {
    try {
        const data = req.body;
        const { table, foreignKey } = req.query;
        const result = await createCounterpartyService(data, table, foreignKey);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.messge });
    }
};
