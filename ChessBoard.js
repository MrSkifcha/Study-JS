function main(x) {
    for (i = 0; i < x; i++) {
        var lattice = "#_";
        var space = "_#";
        if (i % 2 == 0){
            console.log(lattice.repeat(x / 2));
        } else {
            console.log(space.repeat(x / 2));
        }
    }
}
main(8);