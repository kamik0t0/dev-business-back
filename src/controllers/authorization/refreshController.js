const refreshService = require("../../service/authorization/refreshService.js");

module.exports = async function (req, res) {
    try {
        const { refreshToken } = req.cookies;
        const response = await refreshService(refreshToken);
        res.cookie("refreshToken", response.refresh, {
            httpOnly: true,
            secure: false,
        });
        return res.status(200).json(response);
    } catch (error) {
        console.log(13, error);
        return res.status(400).json({ error: error.message });
    }
};
