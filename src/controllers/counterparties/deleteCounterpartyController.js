const deleteCounterpartyService = require("../../service/counterparties/deleteCounterpartyService.js");

module.exports = async function (req, res) {
    try {
        const { counterpartyId } = req.query;
        const result = await deleteCounterpartyService(counterpartyId);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
