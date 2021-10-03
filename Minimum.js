function min (x , y) {
    //  First variant
    // if (x < y) {
    //     return x;
    // } else {
    //     return y;
    // }
    // Second variant (Ternarniy)
    return (x < y) ? x : y;
}
console.log(min("123","1234"));