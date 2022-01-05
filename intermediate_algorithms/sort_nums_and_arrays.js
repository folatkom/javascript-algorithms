//sort an array that contains integers or/and arrays containing single integers

function sortIt(arr) {
	arr.sort((a,b)=>a-b);
	return arr;
}

sortIt([[3], 4, [2], [5], 1, 6]);
