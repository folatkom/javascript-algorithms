//check if given string is palindrome, ignore special symbols
//(ignoring punctuation, case, and spacing)

function palindrome(str) {
  let tempStr = str.split(/[\W_]/).join("").toLowerCase();
  for(let i = 0; i < tempStr.length; i++){
    if(tempStr.charAt(i) != tempStr.charAt(tempStr.length - i - 1)){
      return false;
    }
  }
  return true;
}
console.log(palindrome("eye"));
console.log(palindrome("not a palindrome"))
console.log(palindrome("_eye"));
console.log(palindrome("A man, a plan, a canal. Panama"))
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("1 eye for of 1 eye."));