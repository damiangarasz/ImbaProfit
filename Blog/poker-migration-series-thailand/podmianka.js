const lol = document.querySelector(".img-mobile");
const lol2 = document.querySelector(".mobile-2");
const lol3 = document.querySelector(".mobile-3");

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
    lol2.setAttribute("src", "mobile-22.webp");
    lol3.setAttribute("src", "");
  } else if (szerokosc <= 1000 && szerokosc > 551) {
    lol.setAttribute("src", "tablet.jpg");
    lol2.setAttribute("src", "");
    lol3.setAttribute("src", "tablet-desktop.jpg");
  } else {
    lol.setAttribute("src", "BG1.jpg");
    lol2.setAttribute("src", "");
    lol3.setAttribute("src", "tablet-desktop.jpg");
  }
}

doStuff();
