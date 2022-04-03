const readSaleService = require("../../service/sales/getSalesService.js");
const readSaleModel = require("../../models/sales/getSalesModel.js");

jest.mock("../../models/sales/getSalesModel.js");

describe("Mocked", () => {
    test("UserId correct", async () => {
        await readSaleModel.mockImplementationOnce(() => [[]]);
        const data = await readSaleService();
        expect(data).toEqual([]);
    });
    test("UserId = undefined", async () => {
        await readSaleModel.mockRejectedValueOnce(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
        const result = readSaleService(undefined);
        await expect(result).rejects.toThrow(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
    });
});

afterEach(() => {
    jest.clearAllMocks();
});
