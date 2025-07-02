var count = 0;
function ShowTri(){
	count+=1
	var showItem = document.getElementById('AreaTri');
	if(count%2!==0){
		showItem.style.display = "block"
	}
	else if(count%2==0){
		showItem.style.display = "none"
	}
}
var AsqCount=0;
function ShowSq(){
	AsqCount+=1
	var showItem = document.getElementById('AreaSq');
	if(AsqCount%2!==0){
		showItem.style.display = "block"
	}
	else if(AsqCount%2==0){
		showItem.style.display = "none"
	}
}
var ARCount=0;
function ShowRec(){
	ARCount+=1
	var showItem = document.getElementById('AreaRec');
	if(ARCount%2!==0){
		showItem.style.display = "block"
	}
	else if(ARCount%2==0){
		showItem.style.display = "none"
	}
}
var PTriCount=0;
function ShowPTri(){
	PTriCount+=1
	var showItem = document.getElementById('PerimeterTri');
	if(PTriCount%2!==0){
		showItem.style.display = "block"
	}
	else if(PTriCount%2==0){
		showItem.style.display = "none"
	}
}
var PSqCount =0;
function ShowPSq(){
	PSqCount+=1
	var showItem = document.getElementById('PerimeterSq');
	if(PSqCount%2!==0){
		showItem.style.display = "block"
	}
	else if(PSqCount%2==0){
		showItem.style.display = "none"
	}
}
var PRCount= 0;
function ShowPRec(){
	PRCount+=1
	var showItem = document.getElementById('PerimeterRec');
	if(PRCount%2!==0){
		showItem.style.display = "block"
	}
	else if(PRCount%2==0){
		showItem.style.display = "none"
	}
}
function CalATri(){
	var base = parseInt(document.getElementById("ATri1").value);
	var height = parseInt(document.getElementById("ATri2").value);
	var area = (base*height)/2
	var answer = "<H2>The area is: " + area;
	document.getElementById("TriAA").innerHTML=answer
}
function TAR(){
	document.getElementById("ATri1").value="";
	document.getElementById("ATri2").value="";
	document.getElementById("TriAA").textContent=" ";
}
function CalASq(){
	var side = parseInt(document.getElementById("side").value);
	var AreaSq = side*side;
	var AnswerASq = "<h2> The Area is: " + AreaSq;
	document.getElementById("SqAA").innerHTML = AnswerASq;
}
function SAR(){
	document.getElementById("side").value="";
	document.getElementById("SqAA").textContent="";
}
function CalARec(){
	var length=parseInt(document.getElementById("PL").value);
	var breadth=parseInt(document.getElementById("PB").value);
	var ans=length*breadth;
	var FAns = "<h2> The Area is: " + ans;
	document.getElementById("RecAA").innerHTML = FAns;
}
function RecAR(){
	document.getElementById("PL").value = "";
	document.getElementById("PB").value="";
	document.getElementById("RecAA").textContent="";
}

