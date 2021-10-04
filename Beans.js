function countChar(line, symbol) {
    line = line.toLowerCase();
    symbol = symbol.toLowerCase();
    var counter = 0;
    for (i = 0; i < line.length; i++) {
        if (line.charAt(i) == symbol) {
            counter++;
        }
    }
    console.log("You founded your number - ", counter);
}
countChar("ABcdcC", "C");
