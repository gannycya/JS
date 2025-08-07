function pow(x, y) {
    let result = 1;

    for (let i = 0; i < y; i++) {
        result = result * x;
    }

    return result;
}
// для прикладу console.log (pow(3, 3));