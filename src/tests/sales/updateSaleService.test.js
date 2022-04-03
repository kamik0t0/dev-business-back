const updateSalesModel = require("../../models/sales/updateSalesModel.js");
const getSaleItemsModel = require("../../models/sales/items/getSaleItemsModel.js");
const postSaleItemsModel = require("../../models/sales/items/postSaleItemsModel.js");
const updateSaleItemsModel = require("../../models/sales/items/updateSaleItemsModel.js");
const deleteSeleItemsModel = require("../../models/sales/items/deleteSaleItemsModel.js");
const updateSalesService = require("../../service/sales/updateSalesService.js");

jest.mock("../../models/sales/updateSalesModel.js");
jest.mock("../../models/sales/items/getSaleItemsModel.js");
jest.mock("../../models/sales/items/postSaleItemsModel.js");
jest.mock("../../models/sales/items/updateSaleItemsModel.js");
jest.mock("../../models/sales/items/deleteSaleItemsModel.js");

describe("POST Sale test", () => {
    test("data, table, id - correct", async () => {
        const fakeData = {
            positions: [{ id: 1 }, { id: 2 }],
        };
        const items = [{ id: 1 }, { id: 2 }];

        await updateSalesModel.mockImplementationOnce(() => []);
        const sales = await getSaleItemsModel.mockImplementationOnce(() => [
            items,
        ]);
        const update = await updateSaleItemsModel.mockImplementation(() => 1);
        const post = await postSaleItemsModel.mockImplementation(() => []);
        const del = await deleteSeleItemsModel.mockImplementation(() => []);

        const result = await updateSalesService(fakeData, "sales", 1);

        expect(update).toHaveBeenCalledTimes(2);
        expect(post).not.toHaveBeenCalled();
        expect(del).not.toHaveBeenCalled();
        expect(sales).toEqual(expect.arrayContaining([]));
        expect(result).toEqual(expect.objectContaining({ updated: true }));
    });

    test("data, table, id - correct", async () => {
        const fakeData = {
            positions: [{ id: 1 }, { id: 2 }, { id: 3 }],
        };
        const items = [{ id: 1 }, { id: 2 }];

        await updateSalesModel.mockImplementationOnce(() => []);
        const sales = await getSaleItemsModel.mockImplementationOnce(() => [
            items,
        ]);
        const update = await updateSaleItemsModel.mockImplementation(() => 1);
        const post = await postSaleItemsModel.mockImplementation(() => []);
        const del = await deleteSeleItemsModel.mockImplementation(() => []);

        const result = await updateSalesService(fakeData, "sales", 1);

        expect(update).toHaveBeenCalledTimes(2);
        expect(post).toHaveBeenCalledTimes(1);
        expect(del).not.toHaveBeenCalled();
        expect(sales).toEqual(expect.arrayContaining([]));
        expect(result).toEqual(expect.objectContaining({ updated: true }));
    });
    test("data, table, id - correct", async () => {
        const fakeData = {
            positions: [{ id: 1 }, { id: 2 }, { id: 3 }],
        };
        const items = [{ id: 1 }, { id: 2 }, { id: 4 }, { id: 3 }];

        await updateSalesModel.mockImplementationOnce(() => []);
        const sales = await getSaleItemsModel.mockImplementationOnce(() => [
            items,
        ]);
        const update = await updateSaleItemsModel.mockImplementation(() => 1);
        const post = await postSaleItemsModel.mockImplementation(() => []);
        const del = await deleteSeleItemsModel.mockImplementation(() => []);

        const result = await updateSalesService(fakeData, "sales", 1);

        expect(update).toHaveBeenCalledTimes(3);
        expect(post).not.toHaveBeenCalled();
        expect(del).toHaveBeenCalledTimes(1);
        expect(sales).toEqual(expect.arrayContaining([]));
        expect(result).toEqual(expect.objectContaining({ updated: true }));
    });
});

afterEach(() => {
    jest.clearAllMocks();
});
