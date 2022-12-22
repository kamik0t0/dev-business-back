const checkAuthhService = require("../../service/authorization/checkAuthService.js");

module.exports = async function (req, res) {
    try {
        const { refreshToken } = req.cookies;
        const token = req.headers.authorization.split(" ")[1];
        const response = await checkAuthhService(token, refreshToken);
        return res.status(200).json(response);
    } catch (error) {
        console.log(9, error);
        return res.status(400).json({ error: error.message });
    }
};
