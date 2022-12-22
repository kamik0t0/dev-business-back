const deletePurchaseService = require("../../service/purchase/deletePurchaseService.js");

module.exports = async function (req, res) {
    try {
        const { PurchaseId } = req.query;
        const result = await deletePurchaseService(PurchaseId);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.messge });
    }
};
