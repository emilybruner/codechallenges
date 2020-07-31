function first_not_repeating_character(s) {
    // using a list instead of map because we need to retrieve the keys in the same order they were inserted
    let list = []
    
    // split the string into each letter, then check to see if the letter exists in the list
    // if not in the list, set the count to 1
    // if already in the list, increment the counter
    s.split('').forEach(letter => {
        if (!list[letter]){
            list[letter] = 1
        } else {
            list[letter]++
        }
        
    })
    
    // go through the list again, and find the value associate with the letter index
    for (let i = 0; i < s.length; i++){
        let letter = s[i]
        // return the first letter with the value of 1
        if (list[letter] == 1){
            return letter
        }
    }
    // if the loop finishes without returning a letter, then return the blank
    return '_'
}
