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

// Создание базы данных с таблицами
// docker build -t acc_helper .
// docker run --name acc_helper -e MYSQL_ROOT_PASSWORD=pass -e MYSQL_DATABASE=acc_helper acc_helper
// docker exec -it acc_helper mysql -u root -p

// docker run -d --network business-helper --network-alias acc_helper -v acc_helper:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=pass -e MYSQL_DATABASE=acc_helper  acc_helper

// docker run -dp 5600:5600 -w /business-back -v "$(pwd):/business-back" --network business-helper -e MYSQL_HOST=mysql -e MYSQL_USER=root -e MYSQL_PASSWORD=pass -e MYSQL_DB=acc_helper business-back sh -c "npm install && npm run dev"

// docker run -dp 3000:3000 -w /business-front -v "$(pwd):/business-front" --network business-helper business-front sh -c "npm install && npm start"

// docker run -d --network business-helper --network-alias mysql -v acc_helper-mysql-data:/var/lib/mysql mysql:5.7
// docker exec -it bd3b8cb66c8ff5185e960643c6caa4c9c524d21ce32e5a5116932ba9efbe4230 mysql -u root -p
// docker run -it --network business-helper nicolaka/netshoot
// docker run -dp 3000:5600 -w /business-back -v "$(pwd):/business-back" --network business-helper business-back sh -c "npm install && npm run dev"
// docker exec -it bd3b8cb66c8f mysql -p acc_helper

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
