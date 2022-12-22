const updatePurchaseModel = require("../../models/purchase/updatePurchaseModel.js");
const getPurchaseItemsModel = require("../../models/purchase/items/getPurchaseItemsModel.js");
const postPurchaseItemsModel = require("../../models/purchase/items/postPurchaseItemsModel.js");
const updatePurchaseItemsModel = require("../../models/purchase/items/updatePurchaseItemsModel.js");
const deleteSeleItemsModel = require("../../models/purchase/items/deletePurchaseItemsModel.js");

module.exports = async function (data, table, id) {
    try {
        await updatePurchaseModel(data, table, id);
        const [items] = await getPurchaseItemsModel(id);
        const { positions } = data;
        // массив из id товаров в накладной полученных из БД
        let idArray = [];
        // массив из id товаров пришедших от клиента
        let idUpdateArray = [];
        items.forEach((oldItem) => {
            idArray.push(oldItem.id);
        });
        for (const item of positions) {
            // если id итерируемой позиции уже есть в БД - обновление данных
            if (idArray.includes(item.id)) {
                updatePurchaseItemsModel(item);
                // если id итерируемой позиции отсутствует в БД - создание новой записи
            } else if (!idArray.includes(item.id) /* && item.id === null */) {
                postPurchaseItemsModel(id, item);
            }
        }
        positions.forEach((newItem) => {
            idUpdateArray.push(newItem.id);
        });
        // если позиция отсутствует - удаление записи
        idArray.forEach((id) => {
            if (!idUpdateArray.includes(id)) {
                deleteSeleItemsModel(id);
            }
        });
        return {
            updated: true,
            message: `You successfuly update`,
        };
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
};
