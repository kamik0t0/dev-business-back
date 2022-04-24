function makeUpdateOrgQuery(table, id, ...args) {
    console.log(table, id);
    let queryParams = args
        .filter((obj) => Object.values(obj)[0] !== null)
        .map((obj) =>
            `"${[Object.keys(obj)]} = "${[Object.values(obj)]}""`.slice(1, -1)
        )
        .join(", ");
    console.log(`UPDATE ${table} SET ${queryParams} WHERE id = ${id}`);
    return `UPDATE ${table} SET ${queryParams} WHERE id = ${id}`;
}

module.exports = makeUpdateOrgQuery;
