const updateSalesModel = require("../../models/sales/updateSalesModel.js");
const getSaleItemsModel = require("../../models/sales/items/getSaleItemsModel.js");
const postSaleItemsModel = require("../../models/sales/items/postSaleItemsModel.js");
const updateSaleItemsModel = require("../../models/sales/items/updateSaleItemsModel.js");
const deleteSeleItemsModel = require("../../models/sales/items/deleteSaleItemsModel.js");

module.exports = async function (data, table, id) {
    try {
        await updateSalesModel(data, table);
        const [items] = await getSaleItemsModel(id);
        const { positions } = data;
        // массив из id товаров в накладной полученных из БД
        let idArray = [];
        // массив из id товаров пришедших от клиента
        let idUpdateArray = [];
        items.forEach((oldItem) => {
            idArray.push(oldItem.id);
        });
        for (const item of positions) {
            // если id итерируемой накладной уже есть в БД - обновление данных
            if (idArray.includes(item.id)) {
                updateSaleItemsModel(item);
                // если id итерируемой накладной отсутствует в БД - создание новой записи
            } else if (!idArray.includes(item.id) && item.id === null) {
                postSaleItemsModel(id, item);
            }
        }
        positions.forEach((newItem) => {
            idUpdateArray.push(newItem.id);
        });
        // если позиция удалена - удаление записи
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
