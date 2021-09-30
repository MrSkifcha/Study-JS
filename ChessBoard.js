for (i = 1; i < 9; i ++) {
    var space = ' ';
    var lattice = '#';
    if (i % 2 == 0) {
        console.log((lattice + space)*8);
    } else {
        console.log(space + lattice);
    }
}