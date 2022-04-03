const postSaleService = require("../../service/sales/postSalesService.js");
const postSalesModel = require("../../models/sales/postSalesModel.js");
const postSaleItemsModel = require("../../models/sales/items/postSaleItemsModel.js");
const postSalesService = require("../../service/sales/postSalesService.js");

jest.mock("../../models/sales/postSalesModel.js");
jest.mock("../../models/sales/items/postSaleItemsModel.js");

describe("POST Sale test", () => {
    const fakeData = {
        positions: [1, 2],
    };
    test("data, OrgId, CounterpartyId - correct", async () => {
        await postSalesModel.mockImplementationOnce(() => [[{}]]);
        const funcToCall = await postSaleItemsModel.mockImplementation(() => 1);
        const result = await postSaleService(fakeData, 1, 1);

        expect(funcToCall).toHaveBeenCalledTimes(2);
        expect(result).toEqual(expect.objectContaining({ created: true }));
        expect(result).toHaveProperty("message");
    });

    test("data - correct; OrgId, CounterpartyId - undefined", async () => {
        await postSalesModel.mockRejectedValue(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
        const result = postSalesService(fakeData, undefined, undefined);

        expect(result).rejects.toThrow(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
    });
    test("args correct, insertId = undefined", async () => {
        await postSaleItemsModel.mockImplementation(() => undefined);
        await postSaleItemsModel.mockRejectedValue(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
        const result = postSalesService(fakeData, 1, 1);

        expect(result).rejects.toThrow(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
    });
});

afterEach(() => {
    jest.clearAllMocks();
});
