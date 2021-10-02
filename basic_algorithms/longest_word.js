//this function returns length of the longest word in given sentence
function findLongestWordLength(str) {
  let len = 0;
  let len1 = 0;
  for(let i = 0; i<str.length; i++){
    len++;
    //end of the word
    if(str.charAt(i) == " " || str.charAt(i) == "." || str.charAt(i) == "," || str.charAt(i) == ";" || str.charAt(i) == ":" || str.charAt(i) == "!" || str.charAt(i) == "?"){
      len -= 1;
      if(len>len1){
        len1 = len;
      }
      len = 0;
    }
    //end of a string without a dot
    else if(i == str.length - 1 && len>len1){
      len1 = len;
    } 
  }
  return len1;
}
let longestWordLength = findLongestWordLength("It is high time to become successful in programming.");
console.log(`The longest word in this sentence is ${longestWordLength} letters long.`);