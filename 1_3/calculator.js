const calculator = (a, b, c) => {
    switch (c) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
        default:
            return 'please input correct operator'
    }
}

module.exports = {
    calculator
}