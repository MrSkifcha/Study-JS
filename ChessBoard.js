function main(x) {
    var line = "";
    for (i = 0; i < x; i++) {
        for (j = 0; j < x; j++) {
            if (i % 2 == j % 2) {
                line += "#";
            } else {
                line += "_";
            }
        }
        line += "\n";
    }
    return line;
}
console.log(main(2));