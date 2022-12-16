var spieler = document.querySelector(".player");
var spielfeld = document.querySelector(".playground");
var points = parseInt("0");
var ziel = document.querySelector(".Ziel");

spieler.style.left = "370px";

spieler.style.top = "765px";

var randomnumber = Math.floor(Math.random() * 50) + 40;

var timer = new Timer(randomnumber);
var timera = new Timer(90);
var timerb = new Timer(100);
var timerc = new Timer(135);
var timerd = new Timer(155);
var timere = new Timer(165);
var timerf = new Timer(105);
var timerg = new Timer(95);
var timerh = new Timer(140);

var count = new Timer(100);

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

  if (keyboard(83) && parseInt(spieler.style.top) < 680) {
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
    var h = document.createElement("div");
    h.classList.add("auto2");
    h.style.top = "90px";
    h.style.left = "-100px";
    spielfeld.appendChild(h);
  }

  var fahrzeuge = document.querySelectorAll(".auto2");
  for (var fahrzeug of fahrzeuge) {
    fahrzeug.style.left = parseInt(fahrzeug.style.left) + 5.5 + "px";
    if (parseInt(fahrzeug.style.left) > 800) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }

    if (parseInt(fahrzeug.style.left) < -100) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }
    if (anyCollision(spieler, fahrzeuge)) {
      alert("Game over!");
      stopGame();
      return;
    }
  }
}

function auto1() {
  if (timera.ready()) {
    var h = document.createElement("div");
    h.classList.add("auto");
    h.style.top = "250px";
    h.style.left = "-100px";
    spielfeld.appendChild(h);
  }

  var fahrzeuge = document.querySelectorAll(".auto");
  for (var fahrzeug of fahrzeuge) {
    fahrzeug.style.left = parseInt(fahrzeug.style.left) + 4 + "px";
    if (parseInt(fahrzeug.style.left) > 800) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }

    if (parseInt(fahrzeug.style.left) < -100) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }
    if (anyCollision(spieler, fahrzeuge)) {
      alert("Game over!");
      stopGame();
      return;
    }
  }
}

function auto3() {
  if (timerb.ready()) {
    var h = document.createElement("div");
    h.classList.add("auto3");
    h.style.top = "165px";
    h.style.left = "800px";
    spielfeld.appendChild(h);
  }

  var fahrzeuge = document.querySelectorAll(".auto3");
  for (var fahrzeug of fahrzeuge) {
    fahrzeug.style.left = parseInt(fahrzeug.style.left) - 5 + "px";
    if (parseInt(fahrzeug.style.left) > 800) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }

    if (parseInt(fahrzeug.style.left) < -100) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }
    if (anyCollision(spieler, fahrzeuge)) {
      alert("Game over!");
      stopGame();
      return;
    }
  }
}

function auto4() {
  if (timerc.ready()) {
    var h = document.createElement("div");
    h.classList.add("auto4");
    h.style.top = "330px";
    h.style.left = "900px";
    spielfeld.appendChild(h);
  }

  var fahrzeuge = document.querySelectorAll(".auto4");
  for (var fahrzeug of fahrzeuge) {
    fahrzeug.style.left = parseInt(fahrzeug.style.left) - 2.2 + "px";
    if (parseInt(fahrzeug.style.left) > 900) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }

    if (parseInt(fahrzeug.style.left) < -100) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }
    if (anyCollision(spieler, fahrzeuge)) {
      alert("Game over!");
      stopGame();
      return;
    }
  }
}

function auto5() {
  if (timere.ready()) {
    var h = document.createElement("div");
    h.classList.add("auto5");
    h.style.top = "420px";
    h.style.left = "-200px";
    spielfeld.appendChild(h);
  }

  var fahrzeuge = document.querySelectorAll(".auto5");
  for (var fahrzeug of fahrzeuge) {
    fahrzeug.style.left = parseInt(fahrzeug.style.left) + 2 + "px";
    if (parseInt(fahrzeug.style.left) > 800) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }

    if (parseInt(fahrzeug.style.left) < -200) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }
    if (anyCollision(spieler, fahrzeuge)) {
      alert("Game over!");
      stopGame();
      return;
    }
  }
}

function auto6() {
  if (timerf.ready()) {
    var h = document.createElement("div");
    h.classList.add("auto6");
    h.style.top = "490px";
    h.style.left = "800px";
    spielfeld.appendChild(h);
  }

  var fahrzeuge = document.querySelectorAll(".auto6");
  for (var fahrzeug of fahrzeuge) {
    fahrzeug.style.left = parseInt(fahrzeug.style.left) - 4 + "px";
    if (parseInt(fahrzeug.style.left) > 800) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }

    if (parseInt(fahrzeug.style.left) < -100) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }
    if (anyCollision(spieler, fahrzeuge)) {
      alert("Game over!");
      stopGame();
      return;
    }
  }
}
function auto7() {
  if (timerg.ready()) {
    var h = document.createElement("div");
    h.classList.add("auto7");
    h.style.top = "580px";
    h.style.left = "-100px";
    spielfeld.appendChild(h);
  }

  var fahrzeuge = document.querySelectorAll(".auto7");
  for (var fahrzeug of fahrzeuge) {
    fahrzeug.style.left = parseInt(fahrzeug.style.left) + 3 + "px";
    if (parseInt(fahrzeug.style.left) > 800) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }

    if (parseInt(fahrzeug.style.left) < -100) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }
    if (anyCollision(spieler, fahrzeuge)) {
      alert("Game over!");
      stopGame();
      return;
    }
  }
}
function auto8() {
  if (timerh.ready()) {
    var h = document.createElement("div");
    h.classList.add("auto8");
    h.style.top = "655px";
    h.style.left = "800px";
    spielfeld.appendChild(h);
  }

  var fahrzeuge = document.querySelectorAll(".auto8");
  for (var fahrzeug of fahrzeuge) {
    fahrzeug.style.left = parseInt(fahrzeug.style.left) - 4 + "px";
    if (parseInt(fahrzeug.style.left) > 800) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }

    if (parseInt(fahrzeug.style.left) < -100) {
      fahrzeug.parentNode.removeChild(fahrzeug);
    }
    if (anyCollision(spieler, fahrzeuge)) {
      alert("Game over!");
      stopGame();
      return;
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

  // Kommentar: sobald der Spieler mit Gegner3 oder 4 kollidiert, werden diese gelöscht
  var collisions = allCollisions(spieler, [ziel]);
  // Kommentar: wir gehen durch alle Kollisionsobjekte durch und löschen sie
  for (var collision of collisions) {
  }

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);

localStorage.setItem;
