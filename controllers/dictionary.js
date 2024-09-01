const matchWords = require('../services/dictionary.js')
const response = require('../utils/response.js')

const getDictionaryLength = function(req, res) {
    response(res, { status: 200, data: { minLength: req.dictionary.minLength, maxLength: req.dictionary.maxLength}})
}

const getMatchingWords = function(req, res) {
    response(res, { status: 200, data: matchWords(req.dictionary.words, req.query.letters)})
}

module.exports = { getDictionaryLength, getMatchingWords }