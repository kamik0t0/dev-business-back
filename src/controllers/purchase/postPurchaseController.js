// создание организации
const postPurchaseService = require("../../service/Purchase/postPurchaseService.js");

module.exports = async function (req, res) {
    try {
        const data = req.body;
        console.log(data);
        const { OrgId, CounterpartyId } = req.query;
        console.log(OrgId, CounterpartyId);
        const result = await postPurchaseService(data, OrgId, CounterpartyId);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.messge });
    }
};
