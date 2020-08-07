function adjacentElementsProduct(inputArray) {

    if (inputArray.length == 1) {
        return 0
    }
    
    let largest = inputArray[0] * inputArray[1]
    
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] * inputArray[i + 1] > largest) {
            largest = inputArray[i] * inputArray[i + 1]
        }
    }
    return largest
}
