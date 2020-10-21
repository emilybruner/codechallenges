var twoSum = function(nums, target) {
    
    hash = {}
    
    for (let i = 0; i < nums.length; i++){
        
        let diff = target - nums[i]
        
        if (hash[diff] != undefined && hash[diff] !== i){
            return [hash[diff] + 1, i + 1]
        } else {
            hash[nums[i]] = i
        }
    }
    
};