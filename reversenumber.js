function reverseNumber(num) {
    let reverse = num.toString().split('').reverse().join('')
    let number = parseInt(reverse, 10)
    
    return number
  }