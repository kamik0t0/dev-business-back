const deletePurchaseService = require("../../service/purchase/deletePurchaseService.js");
const deletePurchaseModel = require("../../models/purchase/deletePurchaseModel.js");

jest.mock("../../models/purchase/deletePurchaseModel.js");

describe("Mocked", () => {
    test("PurchaseId correct", async () => {
        await deletePurchaseModel.mockImplementationOnce(() => []);
        const data = await deletePurchaseService();
        expect(data).toHaveProperty("deleted", true);
        expect(data).toHaveProperty("message");
    });
    test("PurchaseId = undefined", async () => {
        await deletePurchaseModel.mockRejectedValueOnce(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
        const result = deletePurchaseService(undefined);
        await expect(result).rejects.toThrow(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
    });
});

afterEach(() => {
    jest.clearAllMocks();
});
