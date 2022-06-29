const {
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
} = require("./functions.js")
const { names, numbers } = require("./data.js")

console.log(firstEle(names))
console.log(firstEle(numbers))

console.log(notLastEle(names))
console.log(notLastEle(numbers))

console.log(lastEle(names))
console.log(lastEle(numbers))

console.log(nEle(names, 5))
console.log(nEle(numbers, 5))

console.log(remEle(names, "Christian"))
console.log(remEle(numbers, 5))

console.log(noDouble(names))
console.log(noDouble(numbers))

console.log(arrSum(names))
console.log(arrSum(numbers))

console.log(randomNum(4, 22))
console.log(firstLetterBig('bradlfettn'))
console.log(allLettersBig('bradlfettn'))
console.log(lastCharCheck('bradlfettn', 'n'))