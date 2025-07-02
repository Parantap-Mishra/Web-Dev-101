//Functions are First-Class Data
//Functions are Objects
function multiply(x,y) {
	return x*y;
}
multiply.version = "v.1.0.0";
console.log(multiply.version);


//Function factory
function makeMultiplier(multiplier){
	var myFunc = function (x){
		return multiplier * x;
	};
	return myFunc;
};
var multiplyBy3 = makeMultiplier(3)
console.log(multiplyBy3(10))
var doubler = makeMultiplier(2)
console.log(doubler(100))

//passing functions as arguments
function doOperationOn(x, operation){
	return operation(x);
};
var result = doOperationOn(5, doubler);
console.log(result);
result = doOperationOn(100, multiplyBy3);
console.log(result);