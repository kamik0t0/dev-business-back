const updateSalesService = require("../../service/sales/updateSalesService.js");

module.exports = async function (req, res) {
    try {
        const data = req.body;
        const { table, id } = req.query;
        const result = await updateSalesService(data, table, id);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
