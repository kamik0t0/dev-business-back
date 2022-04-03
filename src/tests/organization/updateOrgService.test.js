const updateOrgService = require("../../service/organization/updateOrgService.js");
const updateOrgModel = require("../../models/organization/updateOrgModel.js");

jest.mock("../../models/organization/updateOrgModel.js");

describe("update counterparty test", () => {
    test("Correct values", async () => {
        await updateOrgModel.mockImplementation(() => undefined);
        const result = await updateOrgService();
        expect(result).toHaveProperty("updated", true);
        expect(result).toHaveProperty("message", `You successfuly update`);
    });
});
