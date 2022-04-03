const DBCONNECT = require("../../dbConnect.js");
const readPurchaseService = require("../../service/purchase/getPurchaseService.js");

// тестируется реальное поведение readCounterpartyService
describe("actual", () => {
    test("OrgId correct", async () => {
        const result = await readPurchaseService(1);
        expect(result).toEqual(expect.arrayContaining([]));
    });
    test("OrgId = undefined", async () => {
        const result = readPurchaseService(undefined);
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
