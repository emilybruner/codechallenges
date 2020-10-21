function getArrayElements(m, array){
 
    let uniqueItems = new Set()
    
     function getRandomInt(max) {
      min = 0;
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
    
     while (uniqueItems.size < m) {
      let randomNum = getRandomInt(array.length)
      uniqueItems.add(array[randomNum])
    }
    
    // return n amount of random array items
    let output = [...uniqueItems]
    
    for (let i=0; i < array.length; i++) {
      return output[i]
    }
  }
  