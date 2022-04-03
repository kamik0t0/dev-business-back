const readOrgService = require("../../service/organization/readOrgService.js");
const readOrgModel = require("../../models/organization/readOrgModel.js");

jest.mock("../../models/organization/readOrgModel.js");

describe("Mocked", () => {
    test("UserId correct", async () => {
        await readOrgModel.mockImplementationOnce(() => [[]]);
        const data = await readOrgService();
        expect(data).toEqual([]);
    });
    test("UserId = undefined", async () => {
        await readOrgModel.mockRejectedValueOnce(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
        const result = readOrgService(undefined);
        await expect(result).rejects.toThrow(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
    });
});

afterEach(() => {
    jest.clearAllMocks();
});
