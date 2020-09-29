var findDuplicate = function(nums) {
    const numbers = {};
    
    for (let i = 0; i < nums.length; i++){
        
        if (numbers[nums[i]] === 'exists') {
            return nums[i]
        } else {
            numbers[nums[i]] = 'exists'
        }
        
    }
    
};


var findDuplicate = function(nums) {
    
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++){
            if (i != j && nums[i] === nums[j]){
                return nums[i]
            }
        }
    }
};