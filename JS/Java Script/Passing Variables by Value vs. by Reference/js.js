// Passing Variables by Value vs. by Reference
//By value
console.log("By value");
var a = 7;
var b= a;
console.log("a: " +a);
console.log("b: " +b);

b=5;
console.log("after updating b");
console.log("a: " +a);
console.log("b: " +b);

//By reference
console.log("");
console.log("By reference");
var c = {x: 7};
var d = c;
console.log(c);
console.log(d);

d.x = 5;
console.log("After uptading d.x");
console.log(c);
console.log(d);


//Pass by reference vs by value
//In primitive
console.log("");
function changePrimitive(primValue) {
	console.log("In changePrimitive");
	console.log("Before:");
	console.log(primValue);
	
	primValue = 5;
	console.log("After:");
	console.log(primValue);
};

var value = 7;
changePrimitive(value); // primValue = value
console.log("After changePrimitive, orig value:");
console.log(value);

//In object
console.log("");
function changeObject(objValue) {
	console.log("In changeObject");
	console.log("Before:");
	console.log(objValue);
	
	objValue.x = 5;
	console.log("After:");
	console.log(objValue);
};

var value = {x:7};
changeObject(value); // objValue = value
console.log("After changeObject, orig value:");
console.log(value);




