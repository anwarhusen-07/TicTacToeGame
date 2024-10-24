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
  h1.innerText = "  ";
  playerTurn.innerText = "Player ";
  win = false;
  turn = "X";
});

for (let btn of boxes) {
  btn.addEventListener("click", () => {
    if (!win && btn.innerText === "") {
      navigator.vibrate(100);
      if (turn == "X") {
        btn.innerText = turn;
        btn.style.color = "red";
        playerTurn.innerText = "Computer ";
        btn.disabled = true;
        checkWin();

        if (!win) {
          setTimeout(computerMove, 800);
        }
      }
    }
  });
}

function computerMove() {
  for (let btn of boxes) {
    if (btn.innerText === "") {
      btn.innerText = "O";
      btn.style.color = "white";
      navigator.vibrate(100);
      if (checkWinCondition("O")) {
        boxes.forEach((btn) => (btn.disabled = true));
        playerTurn.innerText = "Player ";
        h1.innerText = " computer  won!";
        return;
      }
      btn.innerText = "";
    }
  }

  for (let btn of boxes) {
    if (btn.innerText === "") {
      btn.innerText = "X";
      if (checkWinCondition("X")) {
        btn.innerText = "O";
        btn.disabled = true;
        playerTurn.innerText = "Player ";
        return;
      }
      btn.innerText = "";
    }
  }

  let emptyBoxes = [];
  boxes.forEach((btn) => {
    if (btn.innerText === "") {
      emptyBoxes.push(btn);
    }
  });

  if (emptyBoxes.length > 0 && !win) {
    let randomIndex = Math.floor(Math.random() * emptyBoxes.length);
    emptyBoxes[randomIndex].innerText = "O";
    emptyBoxes[randomIndex].disabled = true;
    playerTurn.innerText = "Player ";
  }

  checkWin();
}

function checkWinCondition(player) {
  return (
    (b1.innerText === player &&
      b2.innerText === player &&
      b3.innerText === player) ||
    (b4.innerText === player &&
      b5.innerText === player &&
      b6.innerText === player) ||
    (b7.innerText === player &&
      b8.innerText === player &&
      b9.innerText === player) ||
    (b1.innerText === player &&
      b4.innerText === player &&
      b7.innerText === player) ||
    (b2.innerText === player &&
      b5.innerText === player &&
      b8.innerText === player) ||
    (b3.innerText === player &&
      b6.innerText === player &&
      b9.innerText === player) ||
    (b1.innerText === player &&
      b5.innerText === player &&
      b9.innerText === player) ||
    (b3.innerText === player &&
      b5.innerText === player &&
      b7.innerText === player)
  );
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
    h1.innerText = "Player won!";
    boxes.forEach((btn) => (btn.disabled = true));
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
    h1.innerText = "Computer won!";
    win = true;
    boxes.forEach((btn) => (btn.disabled = true));
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
    h1.innerText = "It's a draw!";
    win = true;
    boxes.forEach((btn) => (btn.disabled = true));
  }
}
