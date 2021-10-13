//check if the first word of an array includes all letters from the second word
//repeated letters are meaningless
//ignore case of the letters
function letterChecker(arr) {
  let firstStr = arr[0].toLowerCase();
  let secondStr = arr[1].toLowerCase();
  for(let i = 0; i<secondStr.length; i++){
    let testRegex = RegExp(secondStr[i]);
    if(testRegex.test(firstStr)==false){
      return false;
    } 
  }
    return true;   
}

letterChecker(["hello", "hey"]);