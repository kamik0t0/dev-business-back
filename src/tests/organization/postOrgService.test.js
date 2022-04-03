const postOrgService = require("../../service/organization/postOrgService.js");
const postOrgModel = require("../../models/organization/postOrgModel.js");
const isDuplicate = require("../../handlers/isDuplicate.js");
const DBCONNECT = require("../../dbConnect.js");

jest.mock("../../models/organization/postOrgModel.js");
jest.mock("../../handlers/isDuplicate.js");

describe("Mocked", () => {
    test("correct", async () => {
        await isDuplicate.mockImplementationOnce(() => false);
        await postOrgModel.mockImplementationOnce(() => []);
        const data = await postOrgService("dataObj", "table", "foreignKey");
        expect(data).toHaveProperty("created", true);
        expect(data).toHaveProperty("message");
    });
    test("data = undefined", async () => {
        const result = postOrgService(undefined, "table", "foreignKey");
        await expect(result).rejects.toThrow(
            new Error(
                "Cannot destructure property 'inn' of '(intermediate value)(intermediate value)(intermediate value)' as it is undefined."
            )
        );
    });
    test("dataObj and others undefined", async () => {
        await postOrgModel.mockRejectedValueOnce(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
        const result = postOrgService("dataObj", undefined, undefined);
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
