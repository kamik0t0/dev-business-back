const postPurchaseModel = require("../../models/Purchase/postPurchaseModel.js");
const postPurchaseItemsModel = require("../../models/Purchase/items/postPurchaseItemsModel.js");

module.exports = async function (data, OrgId, CounterpartyId) {
    try {
        const [{ insertId }] = await postPurchaseModel(
                data,
                OrgId,
                CounterpartyId
            ),
            { positions } = data;

        for (const item of positions) {
            postPurchaseItemsModel(insertId, item);
        }

        return {
            created: true,
            message: `Продажа успешно добавлена в базу данных`,
        };
    } catch (error) {
        throw new Error(error.message);
    }
};
