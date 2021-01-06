/*Joining Stuff*/

function join2(first_item,second_item) {
	if (Number.isInteger(first_item)) {
        if(first_item < 0){
        	first_item = (first_item + -first_item) - +first_item;
        }
  	}
  	if (Number.isInteger(second_item)) {
        if(second_item < 0){
        	second_item = (second_item + -second_item) - +second_item;
        }
  	}

	const first_itemString = first_item.toString(),
		  second_itemString = second_item.toString()
		  final = first_itemString + second_itemString;

	return final;
};

/*Adding Stuff*/

function add2(first_item,second_item) {
	const final = first_item + second_item;
	if(Number.isInteger(final)){
		return final;
	} else {
		console.log(final);
		if(isNaN(final) == false) throw 'NaN';
	}
};

/* 'product of' stuff */

function mountUp(first_number,second_number) {
	const total = first_number * second_number;

	return total
}

/*Splitting Stuff*/

function splitThis(x) {
	const xLen = x.length,
		  arr = [];
	for (var i = 0; i < xLen; i++) {
		arr.push(x[i]);
	}
	return arr
};

/*EXPORT*/

module.exports = { join2,add2,mountUp,splitThis };