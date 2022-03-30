const readCounterpartyService = require("../../service/counterparties/readCounterpartyService.js");

module.exports = async function (req, res) {
    try {
        const { OrgId } = req.query;
        const result = await readCounterpartyService(OrgId);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
