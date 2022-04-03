const readPurchaseService = require("../../service/purchase/getPurchaseService.js");
const readPurchaseModel = require("../../models/purchase/getPurchaseModel.js");

jest.mock("../../models/purchase/getPurchaseModel.js");

describe("Mocked", () => {
    test("UserId correct", async () => {
        await readPurchaseModel.mockImplementationOnce(() => [[]]);
        const data = await readPurchaseService();
        expect(data).toEqual([]);
    });
    test("UserId = undefined", async () => {
        await readPurchaseModel.mockRejectedValueOnce(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
        const result = readPurchaseService(undefined);
        await expect(result).rejects.toThrow(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
    });
});

afterEach(() => {
    jest.clearAllMocks();
});
