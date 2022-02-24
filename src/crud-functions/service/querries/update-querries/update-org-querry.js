// функция формирует строку запроса для обновления данных только по измененным полям
module.exports = function (table, inn, ...args) {
    let queryParams = args
        .filter((obj) => Object.values(obj)[0] !== null)
        .map((obj) =>
            `"${[Object.keys(obj)]} = "${[Object.values(obj)]}""`.slice(1, -1)
        )
        .join(", ");

    return `UPDATE ${table} SET ${queryParams} WHERE inn = ${inn}`;
};
