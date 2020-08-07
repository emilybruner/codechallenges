function allLongestStrings(inputArray) {
    // set initial longest length to first item
    let largestLength = inputArray[0].length;
    // for loop to go through array 
    for (let i = 1; i < inputArray.length; i++){
        if (largestLength < inputArray[i].length){
            largestLength = inputArray[i].length
        }
    }
    // filter out all values where the length is equal to that of the largest length
    inputArray = inputArray.filter((element) => {
        return element.length ===largestLength
    })
    return inputArray;
    
}