function bigger100k(arr) {
    return arr.filter(elt => elt.population >= 100000)
}

function less100k(arr) {
    return arr.filter(elt => elt.population < 100000)
}

module.exports = {
    bigger100k,
    less100k
}