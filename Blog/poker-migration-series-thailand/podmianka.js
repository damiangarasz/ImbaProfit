const lol = document.querySelector(".img-mobile");
let szerokosc =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

window.addEventListener("resize", (event) => {
  szerokosc =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  doStuff();
});

console.log(szerokosc);

function doStuff() {
  if (szerokosc <= 550) {
    lol.setAttribute("src", "mobile-1.jpg");
  } else if (szerokosc <= 1000 && szerokosc > 551) {
    lol.setAttribute("src", "tablet.jpg");
  } else {
    lol.setAttribute("src", "BG1.jpg");
  }
}

doStuff();
