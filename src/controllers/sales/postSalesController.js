// создание организации
const postSalesService = require("../../service/sales/postSalesService.js");

module.exports = async function (req, res) {
    try {
        const data = req.body;
        const { OrgId, CounterpartyId } = req.query;
        const result = await postSalesService(data, OrgId, CounterpartyId);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.messge });
    }
};
