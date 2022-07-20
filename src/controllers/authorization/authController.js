const authService = require("../../service/authorization/authService.js");

module.exports = async function (req, res) {
    try {
        const response = await authService(req.fields || {});
        return res.status(200).json(response);
    } catch (error) {
        return res.status(401).json({ error: error });
    }
};
