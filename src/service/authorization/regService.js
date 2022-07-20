const bcrypt = require("bcryptjs");
const mail = require("./mailService.js");
const getUserModel = require("../../models/user/getUserModel.js");
const insertUserModel = require("../../models/user/insertUserModel.js");

module.exports = async function ({ email, pass }) {
    console.log(email, pass);
    try {
        const { id } = await getUserModel(email);
        if (id) {
            console.log(id);
            return {
                regerror: `Пользователь с email ${email} уже зарегистрирован`,
            };
        }
        const hashPassword = await bcrypt.hash(pass, 7);
        await insertUserModel(hashPassword, email);
        await mail(email, pass);

        return {
            registered: true,
            message: `You successfuly registered with email ${email}`,
        };
    } catch (error) {
        throw new Error(error.message);
    }
};
