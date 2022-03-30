const recoverService = require("../../service/authorization/recoverService.js");

module.exports = async function (req, res) {
    try {
        const response = await recoverService(req.fields || {});
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
