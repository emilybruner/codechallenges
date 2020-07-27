function firstNotRepeatingCharacter(s) {
    // use a list, map didn't work well bc the keys need to be retrieved in the same order as they were inserted, so using a list instead
   let list = []
   
   // split the string into letter, then check if the letter exists in the list
   // if not in list, set count to 1
   // if already in list, increment the count for that letter
   s.split('').forEach(letter => {
       if (!list[letter]){
           list[letter] = 1
       }
        else {
            list[letter]++
        } 
   })
   
   // go through the list again, and find the value associated with the letter index
   for (let i = 0; i < s.length; i++){
       let letter = s[i]
       // return the first letter with the value of 1
       if (list[letter] == 1)
        return letter
   }
   // if the loop finishes without returning a letter, then return the blank
   return '_'
}