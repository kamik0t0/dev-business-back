const DBCONNECT = require("../../dbConnect.js");

module.exports = async function (token, tokenId) {
    console.log(token, tokenId);
    return DBCONNECT.query(
        `UPDATE tokens SET token = "${token}" WHERE id = "${tokenId}"`
    );
};
