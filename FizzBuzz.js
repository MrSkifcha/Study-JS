var multiples3 = 'Fizz';
var multiples5 = 'Buzz';
for (i = 1; i < 101; i++) {
    var three = i % 3;
    var five = i % 5;
    if (three == 0 && five !== 0) {
        console.log(multiples3);
    } else if (five == 0 && three !== 0) {
        console.log(multiples5);
    } else if (three == 0 && five == 0){
        console.log(multiples3 + multiples5);
    } else {
        console.log(i);
    }
}