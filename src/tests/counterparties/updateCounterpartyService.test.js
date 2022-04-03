const updateCounterpartyModel = require("../../models/counterparties/updateCounterpartyModel.js");
const updateCounterpartyService = require("../../service/counterparties/updateCounterpartyService.js");

jest.mock("../../models/counterparties/updateCounterpartyModel.js");

describe("update counterparty test", () => {
    test("Correct values", async () => {
        await updateCounterpartyModel.mockImplementation(() => undefined);
        const result = await updateCounterpartyService();
        expect(result).toHaveProperty("updated", true);
        expect(result).toHaveProperty("message", `You successfuly update`);
    });
});
