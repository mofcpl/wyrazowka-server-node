const { expect } = require('chai');
const chaiHttp = require('chai-http');

const getMatchingWords = require('../services/dictionary.js')
const { findMaxStringLength, findMinStringLength } = require('../utils/arrays.js')

const testDictionary = {
    words: [
        'car',
        'plane',
        'house',
        'keyboard',
        'window',
        'road',
        'butterfly',
        'garbage',
        'holiday',
        'newspaper',
        'photograph',
        'sentence'],
}

describe('Words searching', function() {
    it('Should find matching words', function() {
        const response = getMatchingWords(testDictionary.words, ['','e','','','','','',''])
        expect(response).deep.to.equal(['keyboard','sentence'])
    })
    it("Shouldn't find any words", function() {
        const response = getMatchingWords(testDictionary.words, ['a','','a','',''])
        expect(response).deep.to.equal([])
    })
})

describe('Dictionary size', function() {
    it('Check the length of the shortest word in the dictionary', function() {
        const response = findMinStringLength(testDictionary.words);
        expect(response).to.equal(3)
    })
    it('Check the length of the longest word in the dictionary', function() {
        const response = findMaxStringLength(testDictionary.words);
        expect(response).to.equal(10)
    })
})



