let spieler = document.querySelector(".player");

console.log(spieler.name);
console.log(spieler.age);

let spielfeld = document.querySelector(".playground");
let ziel = document.querySelector(".Ziel");
let pointsDisplay = document.querySelector(".scoretext");

let startbutton = document.querySelector(".button");
let startfield = document.querySelector(".homescreen");
let bgm = new Audio("music/bgm.mp3");
let coin = new Audio("music/coin.mp3");
let score = 0;
spieler.style.left = "370px";

spieler.style.top = "765px";

let randomnumber = Math.floor(Math.random() * 50) + 40;

let timer = new Timer(randomnumber);
let timera = new Timer(90);
let timerb = new Timer(100);
let timerc = new Timer(135);
let timerd = new Timer(155);
let timere = new Timer(165);
let timerf = new Timer(105);
let timerg = new Timer(95);
let timerh = new Timer(140);
let timercoin = new Timer(200);

let remove = new Timer(600);

startbutton.addEventListener("click", start);

function start() {
  startfield.style.display = "none";
}

function steuerung() {
  if (keyboard(68) && parseInt(spieler.style.left) < 768) {
    spieler.style.left = parseInt(spieler.style.left) + 2 + "px";
    spieler.style.backgroundImage = "url('img/Capybara-Walk.gif')";
    spieler.style.transform = "rotate(90deg)";
  } else {
    spieler.style.backgroundImage = "url('img/1.png')";
  }

  if (keyboard(65) && parseInt(spieler.style.left) > 0) {
    spieler.style.left = parseInt(spieler.style.left) - 2 + "px";
    spieler.style.backgroundImage = "url('img/Capybara-Walk.gif')";
    spieler.style.transform = "rotate(270deg)";
  }

  if (keyboard(83) && parseInt(spieler.style.top) < 768) {
    spieler.style.top = parseInt(spieler.style.top) + 2 + "px";
    spieler.style.backgroundImage = "url('img/Capybara-Walk.gif')";
    spieler.style.transform = "rotate(180deg)";
  }

  if (keyboard(87) && parseInt(spieler.style.top) > 0) {
    spieler.style.top = parseInt(spieler.style.top) - 2 + "px";
    spieler.style.backgroundImage = "url('img/Capybara-Walk.gif')";
    spieler.style.transform = "rotate(0deg)";
  }
}
function stopGame() {
  window.location.reload();
}
function dash() {
  if (keyboard(68) && keyboard(32) && parseInt(spieler.style.left) < 768) {
    spieler.style.left = parseInt(spieler.style.left) + 2 + "px";
  }

  if (keyboard(65) && keyboard(32) && parseInt(spieler.style.left) > 0) {
    spieler.style.left = parseInt(spieler.style.left) - 2 + "px";
  }

  if (keyboard(83) && keyboard(32) && parseInt(spieler.style.top) < 680) {
    spieler.style.top = parseInt(spieler.style.top) + 2 + "px";
  }

  if (keyboard(87) && keyboard(32) && parseInt(spieler.style.top) > 0) {
    spieler.style.top = parseInt(spieler.style.top) - 2 + "px";
  }
}

function auto2() {
  if (timer.ready()) {
    let h = document.createElement("div");
    h.classList.add("auto2");
    h.style.top = "90px";
    h.style.left = "-100px";
    spielfeld.appendChild(h);
  }

  let fahrzeuge = document.querySelectorAll(".auto2");
  for (let fahrzeug of fahrzeuge) {
    fahrzeug.style.left = parseInt(fahrzeug.style.left) + 5.5 + "px";
    if (parseInt(fahrzeug.style.left) > 800) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }

    if (parseInt(fahrzeug.style.left) < -100) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }
    if (anyCollision(spieler, fahrzeuge)) {
      alert("Game over!");
      alert("Your score is " + score);
      stopGame();
      return;
    }
  }
}

function auto1() {
  if (timera.ready()) {
    let h = document.createElement("div");
    h.classList.add("auto");
    h.style.top = "250px";
    h.style.left = "-100px";
    spielfeld.appendChild(h);
  }

  let fahrzeuge = document.querySelectorAll(".auto");
  for (let fahrzeug of fahrzeuge) {
    fahrzeug.style.left = parseInt(fahrzeug.style.left) + 4 + "px";
    if (parseInt(fahrzeug.style.left) > 800) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }

    if (parseInt(fahrzeug.style.left) < -100) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }
    if (anyCollision(spieler, fahrzeuge)) {
      alert("Game over!");
      alert("Your score is " + score);
      stopGame();
      return;
    }
  }
}

function auto3() {
  if (timerb.ready()) {
    let h = document.createElement("div");
    h.classList.add("auto3");
    h.style.top = "165px";
    h.style.left = "800px";
    spielfeld.appendChild(h);
  }

  let fahrzeuge = document.querySelectorAll(".auto3");
  for (let fahrzeug of fahrzeuge) {
    fahrzeug.style.left = parseInt(fahrzeug.style.left) - 5 + "px";
    if (parseInt(fahrzeug.style.left) > 800) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }

    if (parseInt(fahrzeug.style.left) < -100) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }
    if (anyCollision(spieler, fahrzeuge)) {
      alert("Game over!");
      alert("Your score is " + score);
      stopGame();
      return;
    }
  }
}

function auto4() {
  if (timerc.ready()) {
    let h = document.createElement("div");
    h.classList.add("auto4");
    h.style.top = "330px";
    h.style.left = "900px";
    spielfeld.appendChild(h);
  }

  let fahrzeuge = document.querySelectorAll(".auto4");
  for (let fahrzeug of fahrzeuge) {
    fahrzeug.style.left = parseInt(fahrzeug.style.left) - 2.2 + "px";
    if (parseInt(fahrzeug.style.left) > 900) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }

    if (parseInt(fahrzeug.style.left) < -200) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }
    if (anyCollision(spieler, fahrzeuge)) {
      alert("Game over!");
      alert("Your score is " + score);
      stopGame();
      return;
    }
  }
}

function auto5() {
  if (timere.ready()) {
    let h = document.createElement("div");
    h.classList.add("auto5");
    h.style.top = "420px";
    h.style.left = "-200px";
    spielfeld.appendChild(h);
  }

  let fahrzeuge = document.querySelectorAll(".auto5");
  for (let fahrzeug of fahrzeuge) {
    fahrzeug.style.left = parseInt(fahrzeug.style.left) + 2 + "px";
    if (parseInt(fahrzeug.style.left) > 800) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }

    if (parseInt(fahrzeug.style.left) < -200) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }
    if (anyCollision(spieler, fahrzeuge)) {
      alert("Game over!");
      alert("Your score is " + score);
      stopGame();
      return;
    }
  }
}

function auto6() {
  if (timerf.ready()) {
    let h = document.createElement("div");
    h.classList.add("auto6");
    h.style.top = "490px";
    h.style.left = "800px";
    spielfeld.appendChild(h);
  }

  let fahrzeuge = document.querySelectorAll(".auto6");
  for (let fahrzeug of fahrzeuge) {
    fahrzeug.style.left = parseInt(fahrzeug.style.left) - 4 + "px";
    if (parseInt(fahrzeug.style.left) > 800) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }

    if (parseInt(fahrzeug.style.left) < -100) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }
    if (anyCollision(spieler, fahrzeuge)) {
      alert("Game over!");
      alert("Your score is " + score);
      stopGame();
      return;
    }
  }
}
function auto7() {
  if (timerg.ready()) {
    let h = document.createElement("div");
    h.classList.add("auto7");
    h.style.top = "580px";
    h.style.left = "-100px";
    spielfeld.appendChild(h);
  }

  let fahrzeuge = document.querySelectorAll(".auto7");
  for (let fahrzeug of fahrzeuge) {
    fahrzeug.style.left = parseInt(fahrzeug.style.left) + 3 + "px";
    if (parseInt(fahrzeug.style.left) > 800) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }

    if (parseInt(fahrzeug.style.left) < -100) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }
    if (anyCollision(spieler, fahrzeuge)) {
      alert("Game over!");
      alert("Your score is " + score);
      stopGame();
      return;
    }
  }
}
function auto8() {
  if (timerh.ready()) {
    let h = document.createElement("div");
    h.classList.add("auto8");
    h.style.top = "655px";
    h.style.left = "800px";
    spielfeld.appendChild(h);
  }

  let fahrzeuge = document.querySelectorAll(".auto8");
  for (let fahrzeug of fahrzeuge) {
    fahrzeug.style.left = parseInt(fahrzeug.style.left) - 4 + "px";
    if (parseInt(fahrzeug.style.left) > 800) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }

    if (parseInt(fahrzeug.style.left) < -100) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }

    if (anyCollision(spieler, fahrzeuge)) {
      alert("Game over!");
      alert("Your score is " + score);
      stopGame();
      return;
    }
  }
}

function colcoins() {
  if (timercoin.ready()) {
    let randomheight = Math.floor(Math.random() * (720 - 40) + 40);
    let randomwidth = Math.floor(Math.random() * (720 - 40) + 40);
    let h = document.createElement("div");
    h.classList.add("coin");
    h.style.top = randomheight + "px";
    h.style.left = randomwidth + "px";
    spielfeld.appendChild(h);
  }

  let coins = document.querySelectorAll(".coin");
  let player = document.querySelector(".player");

  for (let coin of coins) {
    if (remove.ready()) {
      coin.parentNode.removeChild(coin);
    }
    let collisions = allCollisions(player, coins);

    for (let collision of collisions) {
      collision.parentNode.removeChild(collision);

      score = score + 1;

      pointsDisplay.textContent = score;
    }
  }
}

function loop() {
  steuerung();
  auto2();
  auto1();
  auto3();
  auto4();
  auto5();
  auto6();
  auto7();
  auto8();
  dash();
  colcoins();

  bgm.play();

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
