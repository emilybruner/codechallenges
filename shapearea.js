function shapeArea(n) {
    let area = 1;
    for (let i=1; i <= n; i++){
        area += i * 4 - 4
    }
    return area
}
