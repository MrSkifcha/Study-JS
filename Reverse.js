const array = ["A", "B", "C", "D"];

function reverseArray(arr) {
    var result = [];
    var long = arr.length - 1;

    for (i = long; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
console.log(reverseArray(array));

function reverseArrayInPlace(array) {
    for (key = 0; key < array.length / 2; key++) {
        let saveItem = array[key];
        array[key] = array[array.length - 1 - key];
        array[array.length - 1 - key] = saveItem;
    }
    // let first = array[0];
    // array[0] = array[array.length - 1 - 0];
    // array[array.length - 1 - 0] = first;

    // let second = array[1];
    // array[1] = array[array.length - 1 - 1];
    // array[array.length - 1 - 1] = second;

    // let third = array[2];
    // array[2] = array[array.length -1 - 2];
    // array[array.length -1 - 2] = third;
    return array;
}
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
