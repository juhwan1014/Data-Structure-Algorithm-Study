/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = (s) => {
    const map = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    
    let arr = []
    for(let i = 0; i < s.length; i++){
       if(map[s[i]]){
           arr.push(map[s[i]])
       }
        else{
            if(s[i] !== arr.pop()){
                return false
            }
        }
    }
    
    return arr.length === 0
}



//Input : s = "()[]{}"
