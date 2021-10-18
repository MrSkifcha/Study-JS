var array = ["1", "s", "2"];

// function everyCustom(array) {
    // let flag = false;
    // for (i = 0; i < array.length; i ++) {
    //     if (typeof array[i] === typeof NaN) {
    //         flag = true;
    //     } else {
    //         flag = false;
    //         break;
    //     }
    // };
    // return flag;
// };
// console.log(everyCustom(array));

// var arr = array.filter((item) => {
//     return typeof item === typeof NaN;
// });

// function every(array) {
//     if (array.length == arr.length) {
//         return true;
//     } else {
//         return false;
//     }
// };
// console.log(array, arr);
// console.log(every(array));

function some() {
    let flag = false;
    for (i = 0; i < array.length; i ++) {
        if (typeof array[i] === typeof NaN) {
            flag = true;
            break;
        } else {
            flag = false;
        }
    };
    return flag;
}
console.log(some(array));
