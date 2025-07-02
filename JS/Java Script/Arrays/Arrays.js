//Arrays
var array = new Array();
array[0] = "Parantap";
array[1] = "12";
array[2] = function (name){
	console.log("Hello " + name + "!");
};
array[3] = {
				father: "Piyush Mishra",
				mother: "Mayura Mishra"
			};
console.log(array);
console.log(array[1]);
array[2](array[0]);
console.log(array[3].father);

//short hand array creation
console.log("")
var names = ["Parantap", "Piyush", array[3].mother];
names[100] = "Ram";
console.log(names[99]);

console.log("");
for (var i=0; i < names.length; i++){
	console.log("Hello " + names[i] + "!");
}



console.log("")
var names2 = ["Parantap", "Piyush", array[3].mother];
var myObj = {
	name: names2[0],
	father: names2[1],
	mother: names2[2]
}
for (var h in myObj){
	console.log(h + ":" + myObj[h]);
}
console.log("");
names2.greetings = "Hi!";
for (var name in names2){
	console.log("Hello " + names2[name]);
}



