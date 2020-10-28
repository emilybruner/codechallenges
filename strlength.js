function howMany(sentence) {
    let str = sentence.split(' ')
    const hasNum = /\d/
    
    for (let i = 0; i < str.length; i++){
        if (hasNum.test(str[i]) === true)
        console.log(hasNum.test(str[i]))
        str.splice(i, 1)
    }
    return str.length
}

console.log(howMany('jds dsaf lkdf kdsa fkldsf, adsbf ldka ads? asd bfdal ds bf[l. akf dhj ds 878  dwa WE DE 7475 dsfh ds  RAMU 748 dj.'))