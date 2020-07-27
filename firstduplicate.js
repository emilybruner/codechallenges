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
