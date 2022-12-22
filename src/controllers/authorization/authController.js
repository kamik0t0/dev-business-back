const authService = require("../../service/authorization/authService.js");

module.exports = async function (req, res) {
    try {
        const response = await authService(req.fields || {});
        res.cookie("refreshToken", response.refresh, {
            httpOnly: true,
            secure: false,
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(401).json({ error: error });
    }
};
