const updatePurchaseModel = require("../../models/Purchase/updatePurchaseModel.js");
const getPurchaseItemsModel = require("../../models/Purchase/items/getPurchaseItemsModel.js");
const postPurchaseItemsModel = require("../../models/Purchase/items/postPurchaseItemsModel.js");
const updatePurchaseItemsModel = require("../../models/Purchase/items/updatePurchaseItemsModel.js");
const deleteSeleItemsModel = require("../../models/Purchase/items/deletePurchaseItemsModel.js");

module.exports = async function (data, table, id) {
    try {
        await updatePurchaseModel(data, table);
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
