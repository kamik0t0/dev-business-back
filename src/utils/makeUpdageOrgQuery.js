function makeUpdateOrgQuery(table, id, ...args) {
    let queryParams = args
        .filter((obj) => Object.values(obj)[0] !== null)
        .map((obj) =>
            `"${[Object.keys(obj)]} = "${[Object.values(obj)]}""`.slice(1, -1)
        )
        .join(", ");
    return `UPDATE ${table} SET ${queryParams} WHERE id = ${id}`;
}

module.exports = makeUpdateOrgQuery;
