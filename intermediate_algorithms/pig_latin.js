/*Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.*/

function translatePigLatin(str) {
  if(/^[aeiou]/.test(str)){//word beginning with a vowel
    return `${str}way`
  }
  else{
    let arr = str.split(/(?<=^[^aeiou]+)(?=[aeiou])/);
    //splitting consonants at the beginning of a word and the rest of it
    let newArr = [];
    newArr[0] = arr[1];
    newArr[1] = arr[0];
    return `${newArr.join("")}ay`;
  }
}
console.log(translatePigLatin("california"));
console.log(translatePigLatin("algorithm"));