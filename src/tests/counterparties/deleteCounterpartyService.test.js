const deleteCounterpartyService = require("../../service/counterparties/deleteCounterpartyService.js");
const deleteCounterpartyModel = require("../../models/counterparties/deleteCounterpartyModel.js");

jest.mock("../../models/counterparties/deleteCounterpartyModel.js");

describe("Mocked", () => {
    test("OrgId correct", async () => {
        await deleteCounterpartyModel.mockImplementationOnce(() => []);
        const data = await deleteCounterpartyService();
        expect(data).toHaveProperty("deleted", true);
        expect(data).toHaveProperty("message");
    });
    test("table = undefined || counterpartyId = undefined", async () => {
        await deleteCounterpartyModel.mockRejectedValueOnce(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
        const result = deleteCounterpartyService(undefined);
        await expect(result).rejects.toThrow(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
    });
});

afterEach(() => {
    jest.clearAllMocks();
});
