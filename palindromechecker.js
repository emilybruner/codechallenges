

let pcheck = (s) => {
    let reverseString = (s) => {
    return s.split('').reverse().join('')
  } 
    
    if (s === reverseString(s)) {
      return true
    } else {
      return false
    }
  }
  
  
  