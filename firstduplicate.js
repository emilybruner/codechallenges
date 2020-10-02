function firstDuplicate(a) {
     
     const dict = {}
     
     for (let i=0; i < a.length; i++) {
         if (dict[a[i]]) {
             return a[i]
             break;
         } else {
             dict[a[i]] = a[i]
         }
     }
     return -1
}


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