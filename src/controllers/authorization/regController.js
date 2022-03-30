const regService = require("../../service/authorization/regService.js");

module.exports = async function (req, res) {
    try {
        const response = await regService(req.fields || {});
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
