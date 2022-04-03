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
        const result = authService("Right email", "Wrong Pass");
        await expect(result).rejects.toThrow(new Error("wrong pass"));
    });
    test("Error received id / pass", async () => {
        await getUserModel.mockImplementation(() => {
            return {};
        });
        bcrypt.compareSync.mockReturnValue(true);
        const result = authService("Wrong email", "Wrong Pass");
        await expect(result).rejects.toThrow(new Error("wrong email"));
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});
