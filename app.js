const { createServer } = require('http')
const { parse } = require('url')
const { readFile } = require('fs')

const routes = require('./routes')
const { findMaxStringLength, findMinStringLength } = require('./utils/arrays.js') ;


const PORT = 4000;
const DICTIONARY_PATH='./dictionary.txt'

const dictionary = {
    words: [],
    minLength: null,
    maxLength: null
};

const server = createServer(function(req, res) {
    const parsedUrl = parse(req.url, true);
    const query = parsedUrl.query;
    const path = parsedUrl.pathname;
    const method = req.method.toUpperCase();

    let handler = routes[path] && routes[path][method];

    if (!handler) {
        handler = routes.notFound;
    }

    req.query = {};

    for (const key in query) {
        req.query[key] = query[key];
    }

    req.dictionary = dictionary;

    handler(req, res);

});

console.log('loading...')
readFile(DICTIONARY_PATH, function(err, data) {
    if (err) {
        console.log(err.message)
        process.exit();
    } else {
        dictionary.words = data.toString().split('\n')
        dictionary.minLength = findMinStringLength(dictionary.words);
        dictionary.maxLength = findMaxStringLength(dictionary.words);
        console.log('...done')

        server.listen(PORT, function() {
            console.log(`server listening on port: ${PORT}`)
        } );
    }
})

