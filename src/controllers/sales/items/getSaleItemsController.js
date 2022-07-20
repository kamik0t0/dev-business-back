const getSaleItemsService = require("../../../service/sales/items/getSaleItemsService.js");

module.exports = async function (req, res) {
    try {
        console.log(req.url);
        const { SaleId } = req.query;
        const result = await getSaleItemsService(SaleId);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.messge });
    }
};
