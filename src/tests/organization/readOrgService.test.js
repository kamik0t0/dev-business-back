const DBCONNECT = require("../../dbConnect.js");
const readCounterpartyService = require("../../service/counterparties/readCounterpartyService.js");

// тестируется реальное поведение readCounterpartyService
describe("actual", () => {
    test("OrgId correct", async () => {
        const result = await readCounterpartyService(1);
        expect(result).toEqual(expect.arrayContaining([]));
    });
    test("OrgId = undefined", async () => {
        const result = readCounterpartyService(undefined);
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
