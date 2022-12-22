const postSalesModel = require("../../models/sales/postSalesModel.js");
const postSaleItemsModel = require("../../models/sales/items/postSaleItemsModel.js");

module.exports = async function (data, OrgId, CounterpartyId) {
    try {
        const [{ insertId }] = await postSalesModel(
                data,
                OrgId,
                CounterpartyId
            ),
            { positions } = data;
        positions.forEach((item) => {
            postSaleItemsModel(insertId, item);
        });

        return {
            created: true,
            message: `Продажа успешно добавлена в базу данных`,
        };
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};
