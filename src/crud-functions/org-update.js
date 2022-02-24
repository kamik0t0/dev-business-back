// подключение базы данных
const DBCONNECT = require("../dbConnect.js");
const updateOrgQuerry = require("./service/querries/update-querries/update-org-querry.js");

module.exports = async function (req, res, table) {
    try {
        let {
            upINN,
            opf = null,
            orgname = null,
            inn = null,
            kpp = null,
            director = null,
            address = null,
        } = req.body;
        // создаем организацию
        DBCONNECT(req, res)
            .query(
                updateOrgQuerry(
                    table,
                    upINN,
                    { orgname: orgname },
                    { inn: inn },
                    { kpp: kpp },
                    { address: address },
                    { director: director },
                    { opf: opf }
                )
            )
            .then(() => {
                res.status(200).json({
                    updated: true,
                    message: `You successfuly update`,
                });
            })
            .catch((error) => {
                console.log(error);
                res.status(400).json({
                    message: error,
                });
            });
        //... ответ клиенту
    } catch (error) {
        console.log(error);
    }
};
