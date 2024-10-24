let boxes = document.querySelectorAll(".boxes");
let body = document.body;
let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");
let b3 = document.querySelector("#b3");
let b4 = document.querySelector("#b4");
let b5 = document.querySelector("#b5");
let b6 = document.querySelector("#b6");
let b7 = document.querySelector("#b7");
let b8 = document.querySelector("#b8");
let b9 = document.querySelector("#b9");
let h1 = document.querySelector("h1");
let playerTurn = document.querySelector("#playerTurn");
let resetBtn = document.querySelector("#reset");

let win = false;
let turn = "X";
resetBtn.addEventListener("click", () => {
  for (let btn of boxes) {
    btn.innerText = "";
    btn.disabled = false;
  }
  h1.innerText = "";
  playerTurn.innerText = "Player 1";
  win = false;
  turn = "X";
});

for (let btn of boxes) {
  btn.addEventListener("click", () => {
    if (win == false) {
      if (turn == "X") {
        btn.innerText = turn;
        btn.style.color = "red";
        playerTurn.innerText = "Player 2";
        turn = "O";
        btn.disabled = true;
        checkWin();
      } else {
        btn.innerText = turn;
        btn.style.color = "white";
        playerTurn.innerText = "Player 1";
        turn = "X";
        btn.disabled = true;
        checkWin();
      }
    }
  });
}
function checkWin() {
  if (
    (b1.innerText == "X" && b2.innerText == "X" && b3.innerText == "X") ||
    (b4.innerText == "X" && b5.innerText == "X" && b6.innerText == "X") ||
    (b7.innerText == "X" && b8.innerText == "X" && b9.innerText == "X") ||
    (b1.innerText == "X" && b4.innerText == "X" && b7.innerText == "X") ||
    (b2.innerText == "X" && b5.innerText == "X" && b8.innerText == "X") ||
    (b3.innerText == "X" && b6.innerText == "X" && b9.innerText == "X") ||
    (b1.innerText == "X" && b5.innerText == "X" && b9.innerText == "X") ||
    (b3.innerText == "X" && b5.innerText == "X" && b7.innerText == "X")
  ) {
    h1.innerText = "player 1 won!";
    win = true;
  } else if (
    (b1.innerText == "O" && b2.innerText == "O" && b3.innerText == "O") ||
    (b4.innerText == "O" && b5.innerText == "O" && b6.innerText == "O") ||
    (b7.innerText == "O" && b8.innerText == "O" && b9.innerText == "O") ||
    (b1.innerText == "O" && b4.innerText == "O" && b7.innerText == "O") ||
    (b2.innerText == "O" && b5.innerText == "O" && b8.innerText == "O") ||
    (b3.innerText == "O" && b6.innerText == "O" && b9.innerText == "O") ||
    (b1.innerText == "O" && b5.innerText == "O" && b9.innerText == "O") ||
    (b3.innerText == "O" && b5.innerText == "O" && b7.innerText == "O")
  ) {
    h1.innerText = " player 2 won! ";
    win = true;
  } else if (
    b1.innerText !== "" &&
    b2.innerText !== "" &&
    b3.innerText !== "" &&
    b4.innerText !== "" &&
    b5.innerText !== "" &&
    b6.innerText !== "" &&
    b7.innerText !== "" &&
    b8.innerText !== "" &&
    b9.innerText !== ""
  ) {
    h1.innerText = "It's a draw! ";
    win = true;
  }
}
