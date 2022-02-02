module.exports = function (req, res, next) {
    //  - получать запросы с другого порта только для моего приложения
    res.setHeader(
        "Access-Control-Allow-Origin",
        "http://localhost:3000"
        // "https://kamik0t0.github.io"
    );
    // res.setHeader("Access-Control-Allow-Origin", "https://kamik0t0.github.io");
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // - обрабатывать указанные типы запросов
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With, Content-Type, Authorization, charset, API-Key"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
};
