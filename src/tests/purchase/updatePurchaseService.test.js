const updatePurchasesModel = require("../../models/purchase/updatePurchaseModel.js");
const getPurchaseItemsModel = require("../../models/purchase/items/getPurchaseItemsModel.js");
const postPurchaseItemsModel = require("../../models/purchase/items/postPurchaseItemsModel.js");
const updatePurchaseItemsModel = require("../../models/purchase/items/updatePurchaseItemsModel.js");
const deleteSeleItemsModel = require("../../models/purchase/items/deletePurchaseItemsModel.js");
const updatePurchasesService = require("../../service/purchase/updatePurchaseService");

jest.mock("../../models/purchase/updatePurchaseModel.js");
jest.mock("../../models/purchase/items/getPurchaseItemsModel.js");
jest.mock("../../models/purchase/items/postPurchaseItemsModel.js");
jest.mock("../../models/purchase/items/updatePurchaseItemsModel.js");
jest.mock("../../models/purchase/items/deletePurchaseItemsModel.js");

describe("POST Purchase test", () => {
    test("data, table, id - correct", async () => {
        const fakeData = {
            positions: [{ id: 1 }, { id: 2 }],
        };
        const items = [{ id: 1 }, { id: 2 }];

        await updatePurchasesModel.mockImplementationOnce(() => []);
        const Purchases = await getPurchaseItemsModel.mockImplementationOnce(
            () => [items]
        );
        const update = await updatePurchaseItemsModel.mockImplementation(
            () => 1
        );
        const post = await postPurchaseItemsModel.mockImplementation(() => []);
        const del = await deleteSeleItemsModel.mockImplementation(() => []);

        const result = await updatePurchasesService(fakeData, "Purchases", 1);

        expect(update).toHaveBeenCalledTimes(2);
        expect(post).not.toHaveBeenCalled();
        expect(del).not.toHaveBeenCalled();
        expect(Purchases).toEqual(expect.arrayContaining([]));
        expect(result).toEqual(expect.objectContaining({ updated: true }));
    });

    test("data, table, id - correct", async () => {
        const fakeData = {
            positions: [{ id: 1 }, { id: 2 }, { id: 3 }],
        };
        const items = [{ id: 1 }, { id: 2 }];

        await updatePurchasesModel.mockImplementationOnce(() => []);
        const Purchases = await getPurchaseItemsModel.mockImplementationOnce(
            () => [items]
        );
        const update = await updatePurchaseItemsModel.mockImplementation(
            () => 1
        );
        const post = await postPurchaseItemsModel.mockImplementation(() => []);
        const del = await deleteSeleItemsModel.mockImplementation(() => []);

        const result = await updatePurchasesService(fakeData, "Purchases", 1);

        expect(update).toHaveBeenCalledTimes(2);
        expect(post).toHaveBeenCalledTimes(1);
        expect(del).not.toHaveBeenCalled();
        expect(Purchases).toEqual(expect.arrayContaining([]));
        expect(result).toEqual(expect.objectContaining({ updated: true }));
    });
    test("data, table, id - correct", async () => {
        const fakeData = {
            positions: [{ id: 1 }, { id: 2 }, { id: 3 }],
        };
        const items = [{ id: 1 }, { id: 2 }, { id: 4 }, { id: 3 }];

        await updatePurchasesModel.mockImplementationOnce(() => []);
        const Purchases = await getPurchaseItemsModel.mockImplementationOnce(
            () => [items]
        );
        const update = await updatePurchaseItemsModel.mockImplementation(
            () => 1
        );
        const post = await postPurchaseItemsModel.mockImplementation(() => []);
        const del = await deleteSeleItemsModel.mockImplementation(() => []);

        const result = await updatePurchasesService(fakeData, "Purchases", 1);

        expect(update).toHaveBeenCalledTimes(3);
        expect(post).not.toHaveBeenCalled();
        expect(del).toHaveBeenCalledTimes(1);
        expect(Purchases).toEqual(expect.arrayContaining([]));
        expect(result).toEqual(expect.objectContaining({ updated: true }));
    });
});

afterEach(() => {
    jest.clearAllMocks();
});
