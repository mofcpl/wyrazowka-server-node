
const getMatchingWords = function(words, letters) {
    return words
        .filter(function(element) {
            return element.length == letters.length
        })
        .filter(function(element) {
            return compareWords(element, letters)
        })
}

const compareWords = function(word, letters) {
    for(let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        if(letter == '') continue;
        if(word[i] != letters[i]) return false;
    }
    return true
}

module.exports = getMatchingWords