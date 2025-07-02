// String concatination
console.log("");
console.log("String concatination")
var string="Hello";
string += " World";
// Is equivelent to- string = string + " World"
console.log(string + "!");

// Regular math operators: +, -, *, /
console.log("");
console.log("Math operators");
console.log((5 + 4)/3);
console.log(undefined/5);
function test1 (a){
	console.log(a/5);
}
test1();


// Equality
console.log("");
console.log("Equality")
var x=4, y=4;
if (x == y){
	console.log("x = y = 4");
}

x = "4";
if (x == y){
	console.log("x='4' = y=4");
}

//Strict Equality
console.log("");
console.log("Strict Equality");
if (x===y){
	console.log("Strict x='4' = y=4");
}
else{
	console.log("Strict x='4' not equal y=4")
}

// if statements (all false)
console.log("");
console.log("if statements (all false)");
if (false || null || undefined || "" || NaN){
	console.log("Will never execute");
}
else{
	console.log("All False")
}

// if statements (all true)
console.log("");
console.log("if statements (all true)");
if (true && "hello" && 1 && -1 && "false"){
	console.log("All True");
}
console.log("");
if (true && "hello" && 1 && -1 && ""){
	console.log("Will never execute");
}
else{
	console.log("One false");
}

// Best practice for {} style
// curly brace on the same line or next
//Is it just a style
console.log("")
console.log("Best practice for {} style")
function a()
{
	return
	{
		name: "On next line";
	}
}
function b(){
	return{
		name: "On same line"
	}
}
console.log(a());
console.log(b());
//For loop
console.log("");
console.log("For loop");
var sum = 0;
for (var i=0; i < 10; i=i+1){
	sum+= i;
}
console.log("sum of numbers between 0 and 9 is:" + sum)




