const postPurchaseService = require("../../service/purchase/postPurchaseService");
const postPurchasesModel = require("../../models/purchase/postPurchaseModel.js");
const postPurchaseItemsModel = require("../../models/purchase/items/postPurchaseItemsModel.js");
const postPurchasesService = require("../../service/purchase/postPurchaseService.js");

jest.mock("../../models/purchase/postPurchaseModel.js");
jest.mock("../../models/purchase/items/postPurchaseItemsModel.js");

describe("POST Purchase test", () => {
    const fakeData = {
        positions: [1, 2],
    };
    test("data, OrgId, CounterpartyId - correct", async () => {
        await postPurchasesModel.mockImplementationOnce(() => [[{}]]);
        const funcToCall = await postPurchaseItemsModel.mockImplementation(
            () => 1
        );
        const result = await postPurchaseService(fakeData, 1, 1);

        expect(funcToCall).toHaveBeenCalledTimes(2);
        expect(result).toEqual(expect.objectContaining({ created: true }));
        expect(result).toHaveProperty("message");
    });

    test("data - correct; OrgId, CounterpartyId - undefined", async () => {
        await postPurchasesModel.mockRejectedValue(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
        const result = postPurchasesService(fakeData, undefined, undefined);

        expect(result).rejects.toThrow(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
    });
    test("args correct, insertId = undefined", async () => {
        await postPurchaseItemsModel.mockImplementation(() => undefined);
        await postPurchaseItemsModel.mockRejectedValue(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
        const result = postPurchasesService(fakeData, 1, 1);

        expect(result).rejects.toThrow(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
    });
});

afterEach(() => {
    jest.clearAllMocks();
});
