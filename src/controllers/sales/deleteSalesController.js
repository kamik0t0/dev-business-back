const deleteSalesService = require("../../service/sales/deleteSalesService.js");

module.exports = async function (req, res) {
    try {
        const { SaleId } = req.query;
        const result = await deleteSalesService(SaleId);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.messge });
    }
};
