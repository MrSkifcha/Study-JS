const json = require('./data/ancestry');
const ancestry = JSON.parse(json.data);

function average(array) {
    function plus(a, b) { 
        return a + b; 
    };
    return (array.reduce(plus) / array.length).toFixed(1);
};

var byName = {};
ancestry.forEach((person) => byName[person.name] = person);

const withMother = ancestry.filter((value) => {
    return byName[value.mother] != null;
}).map((person) => {
    return person.born - byName[person.mother].born;
});
console.log(average(withMother));
