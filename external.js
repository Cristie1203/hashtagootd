var p1 = document.getElementById("home");
var p2 = document.getElementById("q1");
var p3 = document.getElementById("q2");
var p4 = document.getElementById("q3");
var p5 = document.getElementById("q4");
var p6 = document.getElementById("q5");
var p7 = document.getElementById("q6");
var p8 = document.getElementById("q7");
var p9 = document.getElementById("q8");
var p10 = document.getElementById("q9");
var p11 = document.getElementById("q10");
var p12 = document.getElementById("end");
var page = 1;
var score = 0;
p2.style.display = "none";
p3.style.display = "none";
p4.style.display = "none";
p5.style.display = "none";
p6.style.display = "none";
p7.style.display = "none";
p8.style.display = "none";
p9.style.display = "none";
p10.style.display = "none";
p11.style.display = "none";
p12.style.display = "none";

document.getElementById("start").addEventListener("click", p1_to_p2);
document.getElementById("ans1").addEventListener("click", p2_to_p3);
document.getElementById("ans2").addEventListener("click", p3_to_p4);
document.getElementById("ans3").addEventListener("click", p4_to_p5);
document.getElementById("ans4").addEventListener("click", p5_to_p6);
document.getElementById("ans5").addEventListener("click", p6_to_p7);
document.getElementById("ans6").addEventListener("click", p7_to_p8);
document.getElementById("ans7").addEventListener("click", p8_to_p9);
document.getElementById("ans8").addEventListener("click", p9_to_p10);
document.getElementById("ans9").addEventListener("click", p10_to_p11);
document.getElementById("ans10").addEventListener("click", p11_to_p12);
document.getElementById("backHome").addEventListener("click", p12_to_p1);

const scr = [];
for(let i = 0; i < 11; i++){
	var str = "scr" + i.toString();
	scr[i] = document.getElementById(str);
}


function p1_to_p2(){
	p1.style.display = "none";
	p2.style.display = "inline";
	page = 2;
	document.getElementById("rightAns1").addEventListener("click", addScore);
}
function p2_to_p3(){
	p2.style.display = "none";
	p3.style.display = "inline";
	page = 3;
	document.getElementById("rightAns2").addEventListener("click", addScore);
}
function p3_to_p4(){
	page = 4;
	p3.style.display = "none";
	p4.style.display = "inline";
	document.getElementById("rightAns3").addEventListener("click", addScore);
}
function p4_to_p5(){
	page = 5;
	p4.style.display = "none";
	p5.style.display = "inline";
	document.getElementById("rightAns4").addEventListener("click", addScore);
}
function p5_to_p6(){
	page = 6;
	p5.style.display = "none";
	p6.style.display = "inline";
	document.getElementById("rightAns5").addEventListener("click", addScore);
}
function p6_to_p7(){
	page = 7;
	p6.style.display = "none";
	p7.style.display = "inline";
	document.getElementById("rightAns6").addEventListener("click", addScore);
}
function p7_to_p8(){
	page = 8;
	p7.style.display = "none";
	p8.style.display = "inline";
	document.getElementById("rightAns7").addEventListener("click", addScore);
}
function p8_to_p9(){
	page = 9;
	p8.style.display = "none";
	p9.style.display = "inline";
	document.getElementById("rightAns8").addEventListener("click", addScore);
}
function p9_to_p10(){
	page = 10;
	p9.style.display = "none";
	p10.style.display = "inline";
	document.getElementById("rightAns9").addEventListener("click", addScore);
}
function p10_to_p11(){
	page = 11;
	p10.style.display = "none";
	p11.style.display = "inline";
	document.getElementById("rightAns10").addEventListener("click", addScore);
}
function p11_to_p12(){
	page = 12;
	p11.style.display = "none";
	p12.style.display = "inline";

	for(let i = 0; i < 11; i++){
		scr[i].style.display = "none";
	}
	scr[score].style.display = "inline";
}
function p12_to_p1(){
	page = 1;
	p12.style.display = "none";
	p1.style.display = "inline";
	score = 0;
}


function addScore(){
	score++;
	console.log(score);
}
