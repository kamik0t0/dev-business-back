const readCounterpartyService = require("../../service/counterparties/readCounterpartyService.js");
const readCounterpartyModel = require("../../models/counterparties/readCounterpartyModel.js");

jest.mock("../../models/counterparties/readCounterpartyModel.js");

describe("Mocked", () => {
    test("OrgId correct", async () => {
        await readCounterpartyModel.mockImplementationOnce(() => [[]]);
        const data = await readCounterpartyService();
        expect(data).toEqual([]);
    });
    test("OrgId = undefined", async () => {
        await readCounterpartyModel.mockRejectedValueOnce(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
        const result = readCounterpartyService(undefined);
        await expect(result).rejects.toThrow(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
    });
});

afterEach(() => {
    jest.clearAllMocks();
});
