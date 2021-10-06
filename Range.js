function sum(customMass) {
    var summa = 0;
    for (i = 0; i < customMass.length; i++) {
        summa = summa + customMass[i];
    }
    return summa;
}

function range(start, end, step = 1) {
    var mass = [];
    
    if (step > 0) {
        for (i = start; i <= end; i = i + step) mass.push(i);
    } else if (step < 0) {
        for (i = end; i >= start; i = i + step) mass.push(i);
    } else {
        mass.push(start);
    }
    return mass;
}
console.log(range(1, 10));
