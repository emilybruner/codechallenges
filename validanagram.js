var isAnagram = function(s, t) {
    check = 0
    word = s.split('')
    
    if (s.length !== t.length){
        return false;
    }
    
    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');
    
    return (sortedS === sortedT)
};