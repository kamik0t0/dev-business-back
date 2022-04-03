const DBCONNECT = require("../../dbConnect.js");
const readCounterpartyModel = require("../../models/counterparties/readCounterpartyModel.js");

describe("mocked", () => {
    jest.mock("../../models/counterparties/readCounterpartyModel.js", () => {
        const original = jest.requireActual(
            "../../models/counterparties/readCounterpartyModel.js"
        );
        return {
            ...original,
            mockedModel: jest.fn().mockImplementationOnce(() => [[]]),
        };
    });
    const mockedModel =
        require("../../models/counterparties/readCounterpartyModel.js").mockedModel;

    test("mocked", async () => {
        // мокнутое поведение
        const mocked = await mockedModel();
        expect(mocked).toEqual([[]]);
        // реальное поведение с обращением к БД
        expect(await readCounterpartyModel(1)).toHaveLength(2);
    });
});

afterAll(() => {
    DBCONNECT.end();
});
