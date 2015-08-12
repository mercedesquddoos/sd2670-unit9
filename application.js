function solveMod(){
	var numOne = document.getElementById("numberOne");
	var numTwo = document.getElementById("numberTwo");
	var output = document.getElementById("output");
	
	output.innerHTML = "";
	
	for (var i = numOne.value; i <= numTwo.value; i++) {
		output.innerHTML += i + " ";
	}
	
	for (var j = numTwo.value; j >= numOne.value; j--) {
		output.innerHTML += j + " ";
	} 
	
}