var i = 1;
var multiples3 = 'Fizz';
var multiples5 = 'Buzz';
for (i; i < 101; i++) {
    if (i % 3 == 0) {
        console.log(i + multiples3);
    } else if (i % 5 == 0) {
        console.log(i + multiples5);
    }/* if (i % 3 == 0 && i % 5 == 0){
        console.log(multiples3 + multiples5);
    }*/ else {
        console.log(i);
    }
}