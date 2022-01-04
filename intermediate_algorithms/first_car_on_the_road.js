/*Create a function that takes a string road and returns the car that's in first place. 
The road will be made of "=", and cars will be represented by letters in the alphabet.
Return "No car available" if there is no car on the road and "No road available" 
if there is no road.*/

function firstPlace(road) {
	let car ='';
	if(road == ''){
		return 'No road available';
	}
	else{
		for(let i=road.length-1; i>=0; i--){
			if(road.charAt(i) != '='){
				car = road.charAt(i);
				return car;
			}
		}	
		if(car == ''){
			return 'No car available';
		}
	}
}

firstPlace("====b===O===e===U=A==");