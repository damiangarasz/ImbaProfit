class obj {
  constructor(img, url, title) {
    this.img = img;
    this.url = url;
    this.title = title;
    this.pusz();
  }

  pusz() {
    arrMiniaturek.push(this);
  }
}

const arrMiniaturek = [];

const basicPokerMath = new obj(
  "./min/basicpokermath.webp",
  "https://youtu.be/aVh7rUAkSlM",
  "Basic Poker Math"
);

document.addEventListener("DOMContentLoaded", () => {
  const chwytak = document.querySelector(".propozycje");
  for (let n = 0; n < arrMiniaturek.length; n++) {
    const miniturka = document.createElement("img");
    miniturka.setAttribute("src", arrMiniaturek[n].img);
    console.log(miniturka);
    chwytak.appendChild(miniturka);
  }
});
