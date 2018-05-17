var x = -1;
var y = 0;
var z = 1;
var a = -1;
var b = 0;
var c = 1;
var score1 = 0;
var score2 = 0;
var out1 = 0;
var out2 = 0;
$("#rock").click(function() {
	score2 = 0;
	score2 += x;
	document.getElementById("win").innerHTML = "";
});
$("#paper").click(function() {
	score2 = 0;
	score2 += y;
	document.getElementById("win").innerHTML = "";
});
$("#scissors").click(function() {
	score2 = 0;
	score2 += z
	document.getElementById("win").innerHTML = "";
});
$("#rocki").click(function() {
	score1 = 0;
	score1 += a;
	document.getElementById("win").innerHTML = "";
});
$("#paperi").click(function() {
	score1 = 0;
	score1 += b;
	document.getElementById("win").innerHTML = "";
});
$("#scissorsi").click(function() {
	score1 = 0;
	score1 += c;
	document.getElementById("win").innerHTML = "";
});
score2 = x + y + z;
score1 = a + b + c;
document.getElementById("p1").innerHTML = out1++;
document.getElementById("p2").innerHTML = out2++;
function test() {
	if (score1 == score2){
		document.getElementById("win").innerHTML = "TIE";
		console.log(score2 + score1);
	}
	else if (score1 == -1 && score2 == 1){
		document.getElementById("win").innerHTML = "PLAYER 1 WINS";
		document.getElementById("p1").innerHTML = out1++;
	}
	else if (score1 == 1 && score2 == -1){
		document.getElementById("win").innerHTML = "PLAYER 2 WINS";
		document.getElementById("p2").innerHTML = out2++;
	}
	else if (score1 == -1 && score2 == 0){
		document.getElementById("win").innerHTML = "PLAYER 2 WINS";
		document.getElementById("p2").innerHTML = out2++;
	}
	else if (score1 == 0 && score2 == -1){
		document.getElementById("win").innerHTML = "PLAYER 1 WINS";
		document.getElementById("p1").innerHTML = out1++;
	}
	else if (score1 == 1 && score2 == 0){
		document.getElementById("win").innerHTML = "PLAYER 1 WINS";
		document.getElementById("p1").innerHTML = out1++;
	}
	else{
		document.getElementById("win").innerHTML = "PLAYER 2 WINS";
		document.getElementById("p2").innerHTML = out2++;
	}
}