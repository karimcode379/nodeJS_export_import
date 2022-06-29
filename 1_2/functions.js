// Mit Array
const firstEle = arr => {
    return arr[0]
}

const notLastEle = arr => {
    const newArr = arr.slice()
    newArr.pop()
    return newArr
}

const lastEle = arr => {
    return arr[arr.length - 1]
}

const nEle = (arr, n) => {
    if (n < 0 || n >= arr.length) {
        return arr[arr.length - 1]
    } else {
        return arr[n]
    }
}

const remEle = (arr, elt) => {
    return arr.filter(word => word !== elt)
}

const noDouble = arr => {
    return [...new Set(arr)]
}

const arrSum = arr => {
    return arr.reduce((a, b) => a + b, 0)
}

// Ohne Array
const randomNum = (a, b) => {
    if (a > b) {
        return Math.floor(Math.random() * (a - b) + b)
    }
    if (b > a) {
        return Math.floor(Math.random() * (b - a) + a)

    }
}

const firstLetterBig = str => {
    return str.slice(0, 1).toUpperCase() + str.slice(1, str.length)
}

const allLettersBig = str => {
    return str.toUpperCase()
}

const lastCharCheck = (str, a) => {
    const lastStr = str.slice(str.length - 1, str.length)
    return (lastStr === a)
}

module.exports = {
    firstEle,
    notLastEle,
    lastEle,
    nEle,
    remEle,
    noDouble,
    arrSum,
    randomNum,
    firstLetterBig,
    allLettersBig,
    lastCharCheck
}