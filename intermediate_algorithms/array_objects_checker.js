//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
  var arr = [];
  let propsArr = Object.keys(source);
  let counter = 0;
  for(let i = 0; i<collection.length; i++){
    for (let j = 0; j<propsArr.length; j++){
      if(collection[i].hasOwnProperty(propsArr[j])){
        if(source[propsArr[j]] == collection[i][propsArr[j]]){
          counter++;
          if(counter == propsArr.length){
          arr.push(collection[i]);
          }
        }
      }
    }
    counter = 0;
  }
  return arr;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));