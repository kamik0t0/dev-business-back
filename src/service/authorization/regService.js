const bcrypt = require("bcryptjs");
const mail = require("./mailService");
const getUserModel = require("../../models/user/getUserModel");
const insertUserModel = require("../../models/user/insertUserModel");
const insertUserToken = require("../../models/user/insertUserToken");
const getTokens = require("../../utils/getTokens");

module.exports = async function ({ email, pass }) {
    try {
        const { id } = await getUserModel(email);
        if (id)
            throw new Error(
                `Пользователь с email ${email} уже зарегистрирован`
            );
        const hashPassword = await bcrypt.hash(pass, 7);
        // const activationLink = uuid.v4();
        const [user] = await insertUserModel(hashPassword, email);
        // await mail(email, pass);
        const tokens = getTokens(email, id);
        // При регистрации создается пара access и refresh tokens
        await insertUserToken(tokens.refresh, user.insertId);
        return {
            ...tokens,
            id: user.insertId,
            message: `You successfuly registered with email ${email}`,
        };
    } catch (error) {
        throw new Error(error.message);
    }
};
