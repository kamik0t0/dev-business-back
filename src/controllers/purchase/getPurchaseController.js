const getPurchaseService = require("../../service/purchase/getPurchaseService.js");

module.exports = async function (req, res) {
    try {
        const { OrgId } = req.query;
        const result = await getPurchaseService(OrgId);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.messge });
    }
};
