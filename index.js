function join2(x, y) {
	if (Number.isInteger(x)) {
        if(x < 0){
        	x = (x + -x) - +x;
        }
  	}

	const xString = x.toString(),
		  yString = y.toString()
		  final = xString + yString;

	return final;
}
module.exports = { join2 };