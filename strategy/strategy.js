export class Strategy extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });

    const styles = document.createElement("style");

    async function loadCSS() {
      const request = await fetch("strategy.css");
      const css = await request.text();
      styles.textContent = css;
    }
    loadCSS();
    this.root.appendChild(styles);
  }

  connectedCallback() {
    const template = document.querySelector("#strategy-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    class objObj {
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

    const basicPokerMath = new objObj(
      "./strategy/min/basicpokermath.webp",
      "https://youtu.be/aVh7rUAkSlM",
      "Basic Poker Math"
    );

    const fishmasterBTN = new objObj(
      "./strategy/min/fishmasterBTN.jpg",
      "https://youtu.be/fpuZyS3Dk9k",
      "Fishmaster BTN"
    );

    const fishmasterHUBB = new objObj(
      "./strategy/min/fishmasterHUBB.webp",
      "https://youtu.be/4BSgk9zXvYc",
      "Fishmaster HUBB"
    );

    const fishmasterHUSB = new objObj(
      "./strategy/min/fishmasterHUSB.jpg",
      "https://youtu.be/OS4Jjs2j1Mk",
      "Fishmaster HUSB"
    );

    const fishmasterSBvBB = new objObj(
      "./strategy/min/fishmasterSBvBB.jpg",
      "https://youtu.be/cC-Ss0DagAQ",
      "Fishmaster SBvBB"
    );

    const gtoPreflopadjust = new objObj(
      "./strategy/min/GTOpreflopadjust.jpg",
      "https://youtu.be/pNXZi_0MGJY",
      "GTO Preflop Adjust"
    );

    const lp1 = new objObj(
      "./strategy/min/LP1.jpg",
      "https://youtu.be/sohv1Oba_Xo",
      "Liveplay 1"
    );

    const lp2 = new objObj(
      "./strategy/min/LP2.webp",
      "https://youtu.be/SUMuV9wTIRo",
      "Liveplay 2"
    );

    const chwytak = document.querySelector(".propozycje");

    for (let n = 0; n < arrMiniaturek.length; n++) {
      const miniturka = document.createElement("img");
      miniturka.setAttribute("src", arrMiniaturek[n].img);
      miniturka.classList.add("miniaturka");
      miniturka.setAttribute("data-value", arrMiniaturek[n].title);
      chwytak.appendChild(miniturka);
    }

    const chwytakMiniaturki = document.querySelectorAll(".miniaturka");

    for (let n of chwytakMiniaturki) {
      n.addEventListener("click", () => {
        const lapacz = n.getAttribute("data-value");
        const inframe = document.querySelector(".inframe");

        switch (lapacz) {
          case "Basic Poker Math":
            inframe.setAttribute(
              "src",
              "https://www.youtube.com/embed/aVh7rUAkSlM?si=oLUQo6bj5dpSfCMK"
            );
            break;
          case "Fishmaster BTN":
            inframe.setAttribute(
              "src",
              "https://www.youtube.com/embed/fpuZyS3Dk9k?si=UENflYbGS8Eo3WTy"
            );
            break;
          case "Fishmaster HUBB":
            inframe.setAttribute(
              "src",
              "https://www.youtube.com/embed/4BSgk9zXvYc?si=a-j1flCStcSWZUo7"
            );
            break;
          case "Fishmaster HUSB":
            inframe.setAttribute(
              "src",
              "https://www.youtube.com/embed/OS4Jjs2j1Mk?si=mKsfVE7M5Mvhdy7J"
            );
            break;
          case "Fishmaster SBvBB":
            inframe.setAttribute(
              "src",
              "https://www.youtube.com/embed/cC-Ss0DagAQ?si=bI-yOWb_mkfAtZWm"
            );
            break;
          case "GTO Preflop Adjust":
            inframe.setAttribute(
              "src",
              "https://www.youtube.com/embed/pNXZi_0MGJY?si=sHmnvnWtlEyGzn2r"
            );
            break;
          case "Liveplay 1":
            inframe.setAttribute(
              "src",
              "https://www.youtube.com/embed/sohv1Oba_Xo?si=SxI_SLMBu2f02ift"
            );
            break;
          case "Liveplay 2":
            inframe.setAttribute(
              "src",
              "https://www.youtube.com/embed/SUMuV9wTIRo?si=TmMS__BSXyFX30Uo"
            );
            break;
        }
      });
    }

    const lol = document.querySelectorAll(".button-scroll");
    let pozycja = 0;

    for (let n of lol) {
      n.addEventListener("click", (event) => {
        const lol = event.target.value;
        console.log(lol);
        const element = document.querySelector(".propozycje");

        if (lol == "right") {
          if (pozycja >= arrMiniaturek.length * 150) {
            pozycja = arrMiniaturek.length * 150;
          } else {
            pozycja += 300;
          }
        } else if (lol == "left") {
          if (pozycja == 0) {
            pozycja = 0;
          } else {
            pozycja -= 300;
          }
        }

        element.scrollTo({ left: pozycja, behavior: "smooth" });
      });
    }
  }
}

customElements.define("strategy-page", Strategy);
