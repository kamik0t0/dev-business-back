const deleteOrgService = require("../../service/organization/deleteOrgService.js");
const deleteOrgModel = require("../../models/organization/deleteOrgModel.js");

jest.mock("../../models/organization/deleteOrgModel.js");

describe("Mocked", () => {
    test("Table and id corre", async () => {
        await deleteOrgModel.mockImplementationOnce(() => []);
        const data = await deleteOrgService();
        expect(data).toHaveProperty("deleted", true);
        expect(data).toHaveProperty("message");
    });
    test("table = undefined || counterpartyId = undefined", async () => {
        await deleteOrgModel.mockRejectedValueOnce(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
        const result = deleteOrgService(undefined);
        await expect(result).rejects.toThrow(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
    });
});

afterEach(() => {
    jest.clearAllMocks();
});
