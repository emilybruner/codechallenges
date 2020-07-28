   // my first try solution 
   var climbStairs = function(n) {
    if (n === 0 || n ===1) {
        return 1
    }
    if (n ===2) {
        return 2
    }
    let counter = 2
    let cprev = 2
    let pprev = 1
    let sum = 0
    while (counter < n){
        sum = cprev + pprev
        pprev = cprev
        cprev = sum
        counter++
    }
    return sum
    
};
   
// researched more efficient solution using dynamic programming
   
   const p = [1, 1] 
   
   for (let i=2; i <= n; i++){
       let result = p[0] + p[1]
       p.shift()
       p.push(result)
   }
    return p[1]