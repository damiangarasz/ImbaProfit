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

const fishmasterBTN = new obj(
  "./min/fishmasterBTN.jpg",
  "https://youtu.be/fpuZyS3Dk9k",
  "Fishmaster BTN"
);

const fishmasterHUBB = new obj(
  "./min/fishmasterHUBB.webp",
  "https://youtu.be/4BSgk9zXvYc",
  "Fishmaster HUBB"
);

const fishmasterHUSB = new obj(
  "./min/fishmasterHUSB.jpg",
  "https://youtu.be/OS4Jjs2j1Mk",
  "Fishmaster HUSB"
);

const fishmasterSBvBB = new obj(
  "./min/fishmasterSBvBB.jpg",
  "https://youtu.be/cC-Ss0DagAQ",
  "Fishmaster SBvBB"
);

const gtoPreflopadjust = new obj(
  "./min/GTOpreflopadjust.jpg",
  "https://youtu.be/pNXZi_0MGJY",
  "GTO Preflop Adjust"
);

const lp1 = new obj(
  "./min/LP1.jpg",
  "https://youtu.be/sohv1Oba_Xo",
  "Liveplay 1"
);

const lp2 = new obj(
  "./min/LP2.webp",
  "https://youtu.be/SUMuV9wTIRo",
  "Liveplay 2"
);

document.addEventListener("DOMContentLoaded", () => {

  const chwytak = document.querySelector(".propozycje");

  for (let n = 0; n < arrMiniaturek.length; n++) {

    const miniturka = document.createElement("img");
    miniturka.setAttribute("src", arrMiniaturek[n].img);
    miniturka.classList.add("miniaturka");
    console.log(miniturka);
    chwytak.appendChild(miniturka);

  }
  //TODO dodać event listener do buttonów i zrobić scrolla na miniaturkach
  const lol = document.querySelectorAll(".button-scroll")
  document.addEventListener()

});


