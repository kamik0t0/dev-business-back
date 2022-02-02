const nodemailer = require("nodemailer");

// настройка почтового клиента
const transporter = nodemailer.createTransport(
    {
        host: "smtp.mail.ru",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "Cap_NEMOx86@inbox.ru",
            pass: "X8Fa2pNNwHb6pj7ejXQs",
        },
    },
    {
        from: "Business hepler <Cap_NEMOx86@inbox.ru>",
    }
);

// внешняя функция-обёртка mail
module.exports = async function (email, pass) {
    // ...отправка пользователю письма
    return transporter.sendMail({
        to: email,
        subject: "Регистрейшн конформейшн",
        text: `Congratulations! You хэв won зе tournament реди to челендж the некст tournament!
                            
                                                Data of your account:
                                                login: ${email}
                                                password: ${pass}
                            
                                                Please, do not reply to this latter...
                                            `,
    });
};
