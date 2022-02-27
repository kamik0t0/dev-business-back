const delQuerry = require("./service/querries/delete-querries/delete-querry.js");
module.exports = async function (req, res, table, idName) {
    const DelId = req.query[idName];
    console.log(table, idName, DelId);
    delQuerry(req, res, table, DelId);
};
