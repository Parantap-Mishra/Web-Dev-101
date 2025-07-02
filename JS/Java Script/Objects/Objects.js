// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstname = "Mark";
// company.ceo.Lastname = " Zuckerburg";
// var Stock = "Stock of company"
// company[Stock] = 110;
// console.log(company);
// console.log("Company CEO name is: " + company.ceo.firstname);
// or
// console.log(company["name"]);
// console.log("Stock of company is: "+ company[Stock]);

//Better way
var myself = {
	name: {
		firstname: "Parantap",
		lastname: "Mishra"
	},
	favColor: "red",
	favCar: "Creta"
};

console.log(myself);
console.log(myself.name.firstname);
