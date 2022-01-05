//remove unnecessary zeros (trailing and leading) in numbers

function removeLeadingTrailing(n) {
	n=n.replace(/(?<=\d+)\.0+(?!0*\d+)/,'');//zeros after comma
	n=n.replace(/^0+(?=[1-9]\d*|0\.\d*|0$)/,'');//zeros before number
	n=n.replace(/(?<=\d+\.\d*[1-9])0+(?!0*\d+)/,'');//zeros after comma and number
	return n;
}

removeLeadingTrailing("230.000");
removeLeadingTrailing("00402");
removeLeadingTrailing("03.1400");
removeLeadingTrailing("30");
removeLeadingTrailing("00");
