var array = [[1, 2, 3], [4, 5], [6]];
function result() {
    return array.reduce((first, second) => first.concat(second));
}
console.log(result(array));

// mass.forEach((value) => {
    //     console.log(value);
// });

// function testFor() {
//     return mass.map((value) => {
//         if (value.sex == "f") return value;
//     }).filter((value) => {
//         if (value) return value;
//     })
// }
//     console.log(testFor());
