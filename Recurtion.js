function checkEven(num) {
    if (num >= 0) {
        return 1;
    } else {
        return -1;
    }
}

function isEven(x) {
    if (x === 0) return true;
    if (x === 1) return false;
    return isEven(x - 2 * checkEven(x));
}
console.log(isEven(9));