function rotateImage(a) {
    let temp = []
    for (let i=0; i < a.length; i++){
        let row = a.map(e => e[i]).reverse()
        temp.push(row)
    }
    a.length = 0;
    a.push(...temp)
    return a
}
