Warmup-1 -- startHi
Given a string, return true if the string starts with 'hi'and false otherwise.

Examples

startHi('hi there') → true
startHi('hi') → true
startHi('hello hi') → false

function startHi(str){
    if(str.charAt(0)=== "H" || str.charAt(1)==="i"){
    return true
    }return false
  }console.log(startHi('hello hi'));