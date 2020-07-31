function merge_packages(items, limit) {
    // create a hash table we can use to lookup if the difference we need exists 
    hash = {}
    empty = []
    for (let i = 0; i < items.length; i+= 1){
        // the difference represents the value of the other item we need to find
        let difference = limit - items[i]
        
        // check if the difference exists in our hash table, if it does, return the correct indices
        // we check to see if the difference exists AND if the difference needed is not the current item
        // if we can find the pair that equals the limit we return the indices of each item
        if (hash[difference] != undefined && hash[difference] !== i){
            return [i, hash[difference]]
        // otherwise assign the current element as a property on the hash and move to the next element of the array
        } else {
            hash[items[i]] = i
        }
    }
    // if no pair weights equals the limit then return an empty array
    return empty
}
