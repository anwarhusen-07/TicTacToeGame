let body = document.body;
let mode = true;
let modeButton = document.querySelector("#mode");
body.querySelector("#enjoy").style.color = "black";
modeButton.addEventListener("click", () => {
  if (mode) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    modeButton.setAttribute("src", "light1.jpg");
    body.querySelector("#enjoy").style.color = "white";
    body.querySelector("ul").style.backgroundColor = "black";
    body.querySelector("ul").style.borderColor = "white";
    mode = false;
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    modeButton.setAttribute("src", "dark4.png");
    body.querySelector("ul").style.backgroundColor = "white";
    body.querySelector("ul").style.color = "black";
    body.querySelector("#enjoy").style.color = "black";
    body.querySelector("ul").style.borderColor = "black";
    mode = true;
  }
});
