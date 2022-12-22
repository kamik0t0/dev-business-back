const regService = require("../../service/authorization/regService.js");

module.exports = async function (req, res) {
    try {
        const response = await regService(req.fields || {});
        res.cookie("refreshToken", response.refresh, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(401).json({ error: error.message });
    }
};
