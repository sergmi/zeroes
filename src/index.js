module.exports = function getZerosCount(number) {
	let value = 0;
	let findZeros = function(i){
		value += Math.floor(number/i);
		if(number>5*i){findZeros(5*i);}
	}
	findZeros(5);
	return value;
}