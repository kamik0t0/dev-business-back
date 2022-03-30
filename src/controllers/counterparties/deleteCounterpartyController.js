const deleteCounterpartyService = require("../../service/counterparties/deleteCounterpartyService.js");

module.exports = async function (req, res) {
    try {
        console.log(req.query);
        const { table, counterpartyId } = req.query;

        const result = await deleteCounterpartyService(table, counterpartyId);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
