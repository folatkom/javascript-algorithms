//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  return str.split(/(?<=[a-z])(?=[A-Z])|[\W_]/).join("-").toLowerCase();
}//regex: beginning of a word:
//lookahead(lowercase letter) & lookbehind(uppercase letter) for camelCase
//or every non alphanumeric sign (ex.space, dot) or underscore

console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('This_Is_Spinal_Tap'));