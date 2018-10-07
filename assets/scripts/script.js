let a = (x = -1);
let c = (z = 1);
let b = (y = score1 = score2 = out1 = out2 = 0);
const whoWon = player => {
  if (player == "p1") {
    document.getElementById("win").innerHTML = "PLAYER 1 WINS";
    document.getElementById("p1").innerHTML = out1++;
  } else if (player == "p2") {
    document.getElementById("win").innerHTML = "PLAYER 2 WINS";
    document.getElementById("p2").innerHTML = out2++;
  } else {
    document.getElementById("win").innerHTML = "TIE";
  }
};
// const win = (player, rps) => {
//   if (player == "score1") {
//     score2 = 0;
//     score2 += rps;
//     console.log(rps, score2);
//   } else {
//     score1 = 0;
//     score1 += rps;
//     console.log(rps, score1);
//   }
//   document.getElementById("win").innerHTML = "";
// };
// $("#rock").click(win("score2", x));
// $("#paper").click(win("score2", y));
// $("#scissors").click(win("score2", z));
// $("#rocki").click(win("score1", a));
// $("#paperi").click(win("score1", b));
// $("#scissorsi").click(win("score1", c));
$("#rock").click(function() {
  score2 = x;
  document.getElementById("win").innerHTML = "";
  $(".p2").toggleClass("test");
});
$("#paper").click(function() {
  score2 = y;
  document.getElementById("win").innerHTML = "";
  $(".p2").toggleClass("test");
});
$("#scissors").click(function() {
  score2 = z;
  document.getElementById("win").innerHTML = "";
  $(".p2").toggleClass("test");
});
$("#rocki").click(function() {
  score1 = a;
  document.getElementById("win").innerHTML = "";
  $(".p1").toggleClass("test");
});
$("#paperi").click(function() {
  score1 = b;
  document.getElementById("win").innerHTML = "";
  $(".p1").toggleClass("test");
});
$("#scissorsi").click(function() {
  score1 = c;
  document.getElementById("win").innerHTML = "";
  $(".p1").toggleClass("test");
});
score2 = x + y + z;
score1 = a + b + c;
document.getElementById("p1").innerHTML = out1++;
document.getElementById("p2").innerHTML = out2++;
function test() {
  $(".p1").removeClass("test");
  $(".p2").removeClass("test");
  if (score1 === score2) {
    whoWon("tie");
    console.log(score2 + score1);
  } else if (
    (score1 == -1 && score2 == 1) ||
    (score1 == 0 && score2 == -1) ||
    (score1 == 1 && score2 == 0)
  ) {
    whoWon("p1");
  } else if (
    (score1 == 1 && score2 == -1) ||
    (score1 == -1 && score2 == 0) ||
    (score1 == 0 && score2 == 1)
  ) {
    whoWon("p2");
  } else {
    whoWon("p2");
  }
  score1 = score2 = 0;
}
