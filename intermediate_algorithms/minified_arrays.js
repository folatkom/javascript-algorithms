/*Write a function that takes two or more arrays and returns a new array of unique 
values in the order of the original provided arrays.*/

function uniteUnique(...arr) {
  let tempArr = [...arr];
  let newArr =[];
  for(let i = 0; i < tempArr.length; i++){
    for(let j = 0; j < tempArr[i].length; j++){
      if(newArr.every((currentValue)=>{
        return currentValue != tempArr[i][j]})){
        newArr.push(tempArr[i][j]);
      }
    }
  }
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));