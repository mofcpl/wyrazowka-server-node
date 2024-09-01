function findMaxStringLength(arr) {
    return arr.reduce((max, str) => {
        return str.length > 0 ? Math.max(max, str.length) : max;
    }, 0);
}

function findMinStringLength(arr) {
    return arr.reduce((min, str) => {
        return str.length > 0 ? Math.min(min, str.length) : min;
    }, Infinity);

}

module.exports = { findMaxStringLength, findMinStringLength }