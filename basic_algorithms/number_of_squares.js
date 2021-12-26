//Create a function that calculates the number of different squares in an n * n square grid.
function numberSquares(n) {
	let sum = 0;
	for(i=0;i<=n;i++){
		sum+=Math.pow(i,2);
	}
	return sum;
}
numberSquares(10);