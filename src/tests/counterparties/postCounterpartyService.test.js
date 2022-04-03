const postCounterpartyService = require("../../service/counterparties/postCounterpartyService.js");
const postCounterpartyModel = require("../../models/counterparties/postCounterpartyModel.js");

jest.mock("../../models/counterparties/postCounterpartyModel.js");

describe("Mocked", () => {
    test("correct", async () => {
        await postCounterpartyModel.mockImplementationOnce(() => []);
        const data = await postCounterpartyService(
            "dataObj",
            "table",
            "foreignKey"
        );
        expect(data).toHaveProperty("created", true);
        expect(data).toHaveProperty("message");
    });
    test("data = undefined", async () => {
        const result = postCounterpartyService(
            undefined,
            "table",
            "foreignKey"
        );
        await expect(result).rejects.toThrow(
            new Error(
                "Cannot destructure property 'inn' of '(intermediate value)(intermediate value)(intermediate value)' as it is undefined."
            )
        );
    });
    test("dataObj and others undefined", async () => {
        await postCounterpartyModel.mockRejectedValueOnce(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
        const result = postCounterpartyService("dataObj", undefined, undefined);
        await expect(result).rejects.toThrow(
            new Error("Unknown column 'undefined' in 'where clause'")
        );
    });
});

afterEach(() => {
    jest.clearAllMocks();
});
