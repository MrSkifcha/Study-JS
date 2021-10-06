var user = {
    name: "Grisha",
    age: 24,
    height: 180,
    weight: 50,
    family: ["Ludmila, Ekaterina, Bul'ka"]
};
var list = {
    value: user["name"]
};
console.log(list["value"]);

console.log(array.shift());
console.log(array);

var mass = [10, 20];
function arrayToList(array) {
    if (array.length > 1) {
        return {
            value: array.shift(),
            rest: arrayToList(array)
        };
    }
    return {
        value: array.shift(),
        rest: null
    }
}
console.log(arrayToList(mass));

function listToArray(list) {
    var result = [];
    let timeList = list;

    while (timeList) {
        result.push(timeList.value);
        timeList = timeList.rest;
    }
    return result;
}
console.log(listToArray(arrayToList([10, 20, 30])));

var data = [
    { 'name': 'Carolus Haverbeke', 'sex': 'm', 'born': 1832, 'died': 1905, 'father': 'Carel Haverbeke', 'mother': 'Maria van Brussel' },
    { 'name': 'Emma de Milliano', 'sex': 'f', 'born': 1876, 'died': 1956, 'father': 'Petrus de Milliano', 'mother': 'Sophia van Damme' },
    { 'name': 'Maria de Rycke', 'sex': 'f', 'born': 1683, 'died': 1724, 'father': 'Frederik de Rycke', 'mother': 'Laurentia van Vlaenderen' },
    { 'name': 'Jan van Brussel', 'sex': 'm', 'born': 1714, 'died': 1748, 'father': 'Jacobus van Brussel', 'mother': 'Joanna van Rooten' },
    { 'name': 'Philibert Haverbeke', 'sex': 'm', 'born': 1907, 'died': 1997, 'father': 'Emile Haverbeke', 'mother': 'Emma de Milliano' },
    { 'name': 'Jan Frans van Brussel', 'sex': 'm', 'born': 1761, 'died': 1833, 'father': 'Jacobus Bernardus van Brussel', 'mother':null },
    { 'name': 'Pauwels van Haverbeke', 'sex': 'm', 'born': 1535, 'died': 1582, 'father': 'N. van Haverbeke', 'mother':null }]

function ret() {
    var minAge = 1800;
    var array = [];
    for (i = 0; i < data.length; i++) {
        if (data[i].sex == "f") array.push(data[i].name);
    }
    return array;
}
console.log(ret());
