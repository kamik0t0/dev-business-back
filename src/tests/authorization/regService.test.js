const bcrypt = require("bcryptjs");
const mail = require("../../service/authorization/mailService.js");
const getUserModel = require("../../models/user/getUserModel.js");
const insertUserModel = require("../../models/user/insertUserModel.js");
const regService = require("../../service/authorization/regService.js");

jest.mock("bcryptjs");
jest.mock("../../service/authorization/mailService.js");
jest.mock("../../models/user/insertUserModel.js");
jest.mock("../../models/user/getUserModel.js");

const testObj = {
    email: "zo-danbuh@mail.ru",
    pass: "pass",
};
const errorObj = {
    email: "errorMail",
    pass: "errorPass",
};

describe("reg service Test", () => {
    test("Correct email and user doesn't exist in Data Base", async () => {
        await getUserModel.mockImplementation(() => {
            return { id: false };
        });
        bcrypt.compareSync.mockReturnValue(true);
        await mail.mockImplementation(() => {
            return {};
        });
        await insertUserModel.mockImplementation(() => {
            return {};
        });
        const result = await regService(testObj);
        await expect(result).toHaveProperty("registered", true);
        await expect(result).toHaveProperty("message");
    });

    test("Correct mail and user already exist in Data Base ", async () => {
        await getUserModel.mockImplementation(() => {
            return { id: true };
        });

        const result = await regService(testObj);
        expect(result).toHaveProperty(
            "regerror",
            `Пользователь с email ${testObj.email} уже зарегистрирован`
        );
    });

    test("Wrong email and user doesn't exist in Data Base ", async () => {
        await getUserModel.mockImplementation(() => {
            return { id: false };
        });
        await mail.mockRejectedValue(
            new Error(
                `550 Message was not accepted -- invalid mailbox.  Local mailbox ${errorObj.email} is unavailable: user not foundl`
            )
        );

        const result = regService(errorObj);
        await expect(result).rejects.toThrow(
            new Error(
                `550 Message was not accepted -- invalid mailbox.  Local mailbox ${errorObj.email} is unavailable: user not foundl`
            )
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});
