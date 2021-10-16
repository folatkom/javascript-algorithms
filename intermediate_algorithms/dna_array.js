/*The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.*/

function pairElement(str) {
 let arr = str.split("");
 let dnaArr = [];
 for(let i = 0; i<arr.length; i++){
   switch(arr[i]){
     case 'G':
      dnaArr.push(['G','C']);
      break;
     case 'C':
      dnaArr.push(['C','G']);
      break;
     case 'A':
      dnaArr.push(['A','T']);
      break;
     case 'T':
      dnaArr.push(['T','A']);
      break;
   }
 }
 return dnaArr;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));