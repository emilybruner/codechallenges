var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    
    let length = nums.length
    
    if (length % 2 === 0) {
        return nums[length /2]
    } else {
        return nums[(length - 1) /2]
    }
    
};