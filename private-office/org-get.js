// подключение базы данных
const DBCONNECT = require("../dbConnect.js");

module.exports = async function (req, res) {
    try {
        // обработка запроса на список организаций пользователя
        if (req.query.UserId) {
            const UserId = req.query.UserId;
            const [result] = await DBCONNECT().query(
                `SELECT * FROM Orgs WHERE UserId = ${UserId}`
            );
            await res.status(200).json(result);
            // обаработка запроса на реквизиты конкретной организацииd
        }
    } catch (error) {
        console.log(error);
    }
};
