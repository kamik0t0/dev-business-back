const bcrypt = require("bcryptjs");
const mail = require("../service/authorization/mailService.js");
const getUserModel = require("../models/user/getUserModel.js");
const updateUserModel = require("../models/user/updateUserModel.js");
const recoverService = require("../service/authorization/recoverService.js");

jest.mock("bcryptjs");
jest.mock("../service/authorization/mailService.js");
jest.mock("../models/user/getUserModel.js");
jest.mock("../models/user/updateUserModel.js");

const testObj = {
    email: "zo-danbuh@mail.ru",
    pass: "pass",
};

const testUser = {
    id: 58,
    createdAt: "2022-03-28T20:58:42.000Z",
    password: "$2a$07$MNjfU05BA0LD6rOpGpwn1uZyZHy1TYFeftbvocvEVJ2YmZysIsyL6",
    email: "zo-danbuh@mail.ru",
};

const updated = [
    (ResultSetHeader = {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 0,
        info: "Rows matched: 1  Changed: 1  Warnings: 0",
        serverStatus: 34,
        warningStatus: 0,
        changedRows: 1,
    }),
    undefined,
];

const errorObj = {
    email: "errorMail",
    pass: "errorPass",
};

describe("Recover service tests", () => {
    test("Correct values", async () => {
        await getUserModel.mockImplementation(() => testUser);
        await bcrypt.hash.mockImplementation(() => "hashedPassword");
        await mail.mockImplementation(() => {
            return {};
        });
        await updateUserModel.mockImplementation(() => updated);

        const result = await recoverService(testObj);
        await expect(result).toHaveProperty("updated", true);
        await expect(result).toHaveProperty(
            "message",
            `Пароль успешно изменен!`
        );
    });

    test("No user in Data Base", async () => {
        await getUserModel.mockImplementation(() => undefined);

        const result = recoverService(errorObj);
        await expect(result).rejects.toThrow(
            new Error(
                `Пользователь с email ${errorObj.email} не зарегистрирован`
            )
        );
    });

    test("Deleted user email", async () => {
        await getUserModel.mockImplementation(() => testUser);
        await bcrypt.hash.mockImplementation(() => "hashedPassword");
        // ошибка генерируется модулем nodemailer автоматически
        await mail.mockRejectedValue(
            new Error(
                `550 Message was not accepted -- invalid mailbox.  Local mailbox ${errorObj.email} is unavailable: user not foundl`
            )
        );

        const result = recoverService(testObj);
        await expect(result).rejects.toThrow(
            `550 Message was not accepted -- invalid mailbox.  Local mailbox ${errorObj.email} is unavailable: user not foundl`
        );
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });
});
