const authService = require("../../service/authorization/authService.js");
const getUserModel = require("../../models/user/getUserModel.js");
const bcrypt = require("bcryptjs");

jest.mock("../../models/user/getUserModel.js");
jest.mock("bcryptjs");

describe("authService test", () => {
    test("Correct values", async () => {
        await getUserModel.mockImplementation(() => {
            return { password: "kdkfjdilkmf2312387", id: 1 };
        });
        bcrypt.compareSync.mockReturnValue(true);
        const result = await authService("Right email", "Right Pass");
        expect(result).toHaveProperty("token", "id", "message");
    });

    test("Error pass check", async () => {
        await getUserModel.mockImplementation(() => {
            return {
                password: "kdkfjdilkmf2312387",
                id: 1,
            };
        });
        bcrypt.compareSync.mockReturnValue(false);
        const result = await authService("Right email", "Wrong Pass");
        // await expect(result).rejects.toThrow(new Error("wrong pass"));
        expect(result).toHaveProperty("message", "Неправильный пароль");
    });
    test("Error received id / pass", async () => {
        await getUserModel.mockImplementation(() => {
            return {};
        });
        bcrypt.compareSync.mockReturnValue(true);
        const result = await authService("Wrong email", "Wrong Pass");
        expect(result).toHaveProperty("message", "Неправильный email");
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});
