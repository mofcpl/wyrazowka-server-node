const { getDictionaryLength, getMatchingWords } = require('../controllers/dictionary.js')
const { response } = require("../utils/response.js");

const routes = {
    "/length": {
        GET: getDictionaryLength
    },
    "/words": {
        GET: getMatchingWords
    },
    notFound: function(_req, res) {
        response(res, {
            status: 404,
            data: { message: "method not found!" },
        })
    }
}

module.exports = routes