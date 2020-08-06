function checkPalindrome(inputString) {
    pal = inputString.split('').reverse().join('')
    console.log(pal)
    if (inputString == pal){
        return true
    } else {
        return false
    }
}
