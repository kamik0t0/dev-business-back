// Подключение к базе данных
const mysql = require("mysql2");

function DBCONNECT() {
    return mysql
        .createPool({
            host: "localhost",
            port: 3306,
            user: "root",
            database: "acc_helper",
            password: "im0bilaiZER",
        })
        .promise();
}

module.exports = DBCONNECT();

/* Пишу здесь эти данные поскольку по факту они не имеют никакого значения и вся информация в базе не имеет никакой реальной ценности, т.е. я понимаю что в реальном проекте так делать не надо ;)

    const connection = mysql
        .createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            database: "business_helper",
            password: "im0bilaiZER",
        })
        .promise();
    const connection = mysql
        .createConnection({
            host: "bzsnhusa3cc94sdeolgg-mysql.services.clever-cloud.com",
            port: 3306,
            user: "uhr4iunb1zlw3cpt",
            database: "bzsnhusa3cc94sdeolgg",
            password: "sIg0E4MMIJILW6EamBI1",
        })
        .promise();


        URI mysql://uhr4iunb1zlw3cpt:sIg0E4MMIJILW6EamBI1@bzsnhusa3cc94sdeolgg-mysql.services.clever-cloud.com:3306/bzsnhusa3cc94sdeolgg
        MySQL CLI mysql -h bzsnhusa3cc94sdeolgg-mysql.services.clever-cloud.com -P 3306 -u uhr4iunb1zlw3cpt -p bzsnhusa3cc94sdeolgg

        MYSQL_ADDON_HOST=bzsnhusa3cc94sdeolgg-mysql.services.clever-cloud.com
MYSQL_ADDON_DB=bzsnhusa3cc94sdeolgg
MYSQL_ADDON_USER=uhr4iunb1zlw3cpt
MYSQL_ADDON_PORT=3306
MYSQL_ADDON_PASSWORD=sIg0E4MMIJILW6EamBI1 
MYSQL_ADDON_URI=mysql://uhr4iunb1zlw3cpt:sIg0E4MMIJILW6EamBI1@bzsnhusa3cc94sdeolgg-mysql.services.clever-cloud.com:3306/bzsnhusa3cc94sdeolgg

Hi

Your account number is: 587208

Your new database is now ready to use.

To connect to your database use these details;


            host: "sql11.freesqldatabase.com",
            port: 3306,
            user: "sql11469385",
            database: "sql11469385",
            password: "KXdMjU1j64",
Host: sql11.freesqldatabase.com
Database name: sql11469385
Database user: sql11469385
Database password: KXdMjU1j64
Port number: 3306

*/
