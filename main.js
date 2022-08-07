var count = 0;
var last_ = 0;
var arr_of_lowesrt_s = [];
function checker() {
  if (document.querySelector("input").value == "") {
    alert("first fill number !");
  } else if (document.querySelector("input").value != "") {
    var ran = Math.random() * (7 - 1) + 1;
    ran = parseInt(ran);
    count++;
    var a = document.querySelector("input");
    document.getElementById("sp").innerText = count;
    var main = parseInt(a.value);
    arr_of_lowesrt_s.push(count);
    if (ran == main) {
      document.getElementById("sp_1").style.textShadow = "4px 4px 8px green";
      document.querySelector("span").innerText = ran;
      document.querySelector(".part2").style.background = "green";
      document.querySelector(".part2").style.boxShadow =
        "0 11px 22px -8px green";
      document.getElementById("sp_1").innerText = "Correct";
      document.getElementById("sp").innerText = 0;
    }
    console.log(arr_of_lowesrt_s);
    var main = arr_of_lowesrt_s.length - 1;
    var main2 = arr_of_lowesrt_s[main];
    last_ = main2;
  }

  document.querySelector("input").value = "";
}

function again() {
  document.getElementById("sp_1").style.textShadow = "4px 4px 8px blue";
  document.querySelector(".part2").style.background = "blue";
  document.querySelector("span").innerText = " ? ";
  count = 0;
  document.getElementById("sp").innerText = 0;
  document.getElementById("sp_2").innerText = last_;
  document.querySelector(".part2").style.boxShadow = "0 11px 22px -8px  blue";
  document.getElementById("sp_1").innerText = "Let's Play Again";
  arr_of_lowesrt_s = [];
  document.querySelector("input").value = "";
}
