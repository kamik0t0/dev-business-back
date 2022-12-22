const getPurchaseItemsService = require("../../../service/purchase/items/getPurchaseItemsService.js");

module.exports = async function (req, res) {
    try {
        const { PurchaseId } = req.query;
        const result = await getPurchaseItemsService(PurchaseId);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.messge });
    }
};
