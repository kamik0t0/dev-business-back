const DBCONNECT = require("../dbConnect.js");
const isDuplicate = require("../handlers/isDuplicate.js");

jest.mock("../dbConnect.js");

describe("isDuplicate test", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("Counterparty exist in Data Base", async () => {
        await DBCONNECT.query.mockImplementation(() => [{ inn: "4086408905" }]);
        const result = await isDuplicate("4086408905", "orgs");
        expect(result).toBe(true);
    });
    test("No counterparty in Data Base", async () => {
        await DBCONNECT.query.mockImplementation(() => [{}]);
        const result = await isDuplicate("408648905", "orgs");
        expect(result).toBe(false);
    });
});
