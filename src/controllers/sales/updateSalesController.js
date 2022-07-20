const updateSalesService = require("../../service/sales/updateSalesService.js");

module.exports = async function (req, res) {
    try {
        const data = req.body;
        console.log(6, data);
        const { table, id } = req.query;
        const result = await updateSalesService(data, table, id);
        console.log(result);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });
    }
};
