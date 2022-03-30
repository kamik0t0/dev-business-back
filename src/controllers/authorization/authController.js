const authService = require("../../service/authorization/authService.js");

module.exports = async function (req, res) {
    try {
        // получаем необходимый результат
        const response = await authService(req.fields || {});
        // успешный ответ
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
