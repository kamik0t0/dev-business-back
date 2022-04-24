// модуль для хеширования пароля
const bcrypt = require("bcryptjs");
const mail = require("./mailService.js");
const getUserModel = require("../../models/user/getUserModel.js");
const updateUserModel = require("../../models/user/updateUserModel.js");

async function recoverService({ email, pass }) {
    try {
        const { id } = await getUserModel(email);
        if (!id) {
            return {
                message: `Пользователь с email ${email} не зарегистрирован`,
            };
        }

        const hashPassword = await bcrypt.hash(pass, 7);
        await mail(email, pass);
        await updateUserModel(hashPassword, email);

        return {
            updated: true,
            message: `Пароль успешно изменен!`,
        };
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = recoverService;
