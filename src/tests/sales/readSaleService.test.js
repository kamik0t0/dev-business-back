const DBCONNECT = require("../../dbConnect.js");
const readSaleService = require("../../service/sales/getSalesService.js");

// тестируется реальное поведение readCounterpartyService
describe("actual", () => {
    test("OrgId correct", async () => {
        const result = await readSaleService(1);
        expect(result).toEqual(expect.arrayContaining([]));
    });
    test("OrgId = undefined", async () => {
        const result = readSaleService(undefined);
        await expect(result).rejects.toThrow(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
    });
});

afterEach(() => {
    jest.clearAllMocks();
});

afterAll(() => {
    DBCONNECT.end();
});
