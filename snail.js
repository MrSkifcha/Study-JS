var depth = 32634756;
var day = 0;
var total = 0;
while (total < depth) {
    day += 1;
    total += 7;
    if (total >= depth) {
        console.log(day);
        break;
    }
    total = total - 2;
}