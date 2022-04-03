const deleteSaleService = require("../../service/sales/deleteSalesService.js");
const deleteSaleModel = require("../../models/sales/deleteSalesModel.js");

jest.mock("../../models/sales/deleteSalesModel.js");

describe("Mocked", () => {
    test("SaleId correct", async () => {
        await deleteSaleModel.mockImplementationOnce(() => []);
        const data = await deleteSaleService();
        expect(data).toHaveProperty("deleted", true);
        expect(data).toHaveProperty("message");
    });
    test("SaleId = undefined", async () => {
        await deleteSaleModel.mockRejectedValueOnce(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
        const result = deleteSaleService(undefined);
        await expect(result).rejects.toThrow(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
    });
});

afterEach(() => {
    jest.clearAllMocks();
});
