//changes object into array of [key,value] arrays
function toArray(obj) {
	let keysArr = Object.keys(obj);
	let objArr = [];
	for(let i = 0; i <keysArr.length; i++){
		let innerArr = [];
		innerArr[0] = keysArr[i];
		innerArr[1] = obj[keysArr[i]];
		objArr.push(innerArr);
	}
	return objArr;
}
toArray({ Jane: 25, Jill: 22 });
