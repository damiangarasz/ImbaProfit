export class Charts extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });

    const styles = document.createElement("style");

    async function loadCSS() {
      const request = await fetch("base.css");
      const css = await request.text();
      styles.textContent = css;
    }
    loadCSS();
    this.root.appendChild(styles);
  }

  connectedCallback() {
    const template = document.querySelector("#charts-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    const buttonyStack = this.root.querySelectorAll(".button-stack");
    const buttony = this.root.querySelectorAll(".button-poz");
  

    const elementLoL = document.createElement("style");
    async function doStuff(inject) {
      const request = await fetch(inject);
      const css = await request.text();
      elementLoL.textContent = css;
    }

    this.root.appendChild(elementLoL);

    for (let n of buttonyStack) {
      n.addEventListener("click", (event) => {
        const przycisk = event.target.value;

        switch (przycisk) {
          case "BBvBTNfish10-12":
            doStuff("./CSS-charts/fishBBvBTN10-12.css");
            break;
          case "BBvBTNfish13-15":
            doStuff("./CSS-charts/fishBBvBTN13-15.css");
            break;
          case "BBvBTNfish16":
            doStuff("./CSS-charts/fishBBvBTN16.css");
            break;
          case "BBvSBfish10-12":
            doStuff("./CSS-charts/fishBBvSB10-12.css");
            break;
          case "BBvSBfish13-15":
            doStuff("./CSS-charts/fishBBvSB13-15.css");
            break;
          case "BBvSBfish16":
            doStuff("./CSS-charts/fishBBvSB16.css");
            break;
          case "BBvSBfishvL13-19":
            doStuff("./CSS-charts/fishBBvSBvL13-19.css");
            break;
          case "BBvSBfishvL20":
            doStuff("./CSS-charts/fishBBvSBvL20.css");
            break;
          case "BBvSBfishvL-12":
            doStuff("./CSS-charts/fishBBvSBvL-12.css");
            break;
          case "BTNfish-11":
            doStuff("./CSS-charts/fishBTN-12.css");
            break;
          case "BTNfish12-15":
            doStuff("./CSS-charts/fishBTN12-15.css");
            break;
          case "BTNfish16-17":
            doStuff("./CSS-charts/fishBTN16-17.css");
            break;
          case "BTNfish18":
            doStuff("./CSS-charts/fishBTN18.css");
            break;
          case "HUBBfish7-9":
            doStuff("./CSS-charts/fishHUBB7-9.css");
            break;
          case "HUBBfish10-12":
            doStuff("./CSS-charts/fishHUBB10-12.css");
            break;
          case "HUBBfish13-15":
            doStuff("./CSS-charts/fishHUBB13-15.css");
            break;
          case "HUBBfish16":
            doStuff("./CSS-charts/fishHUBB16.css");
            break;
          case "HUSBfish-8":
            doStuff("./CSS-charts/fishHUSB-8.css");
            break;
          case "HUSBfish8-9":
            doStuff("./CSS-charts/fishHUSB8-9.css");
            break;
          case "HUSBfish10-12":
            doStuff("./CSS-charts/fishHUSB10-12.css");
            break;
          case "HUSBfish13-15":
            doStuff("./CSS-charts/fishHUSB13-15.css");
            break;
          case "HUSBfish16":
            doStuff("./CSS-charts/fishHUSB16.css");
            break;
          case "HUBBfishvL10-12":
            doStuff("./CSS-charts/fishLHUBB10-12.css");
            break;
          case "HUBBfishvL13-15":
            doStuff("./CSS-charts/fishLHUBB13-15.css");
            break;
          case "HUBBfishvL16":
            doStuff("./CSS-charts/fishLHUBB16.css");
            break;
          case "SBvBBfish-10":
            doStuff("./CSS-charts/fishSBvBB-10.css");
            break;
          case "SBvBBfish10-12":
            doStuff("./CSS-charts/fishSBvBB10-12.css");
            break;
          case "SBvBBfish13-15":
            doStuff("./CSS-charts/fishSBvBB13-15.css");
            break;
          case "SBvBBfish16-19":
            doStuff("./CSS-charts/fishSBvBB16-19.css");
            break;
          case "SBvBBfish20":
            doStuff("./CSS-charts/fishSBvBB20.css");
            break;
          case "SBvBTNfish-15":
            doStuff("./CSS-charts/fishSBvBTN-15.css");
            break;
          case "SBvBTNfish16-19":
            doStuff("./CSS-charts/fishSBvBTN16-19.css");
            break;
          case "SBvBTNfish20":
            doStuff("./CSS-charts/fishSBvBTN20.css");
            break;
        }
      });
    }
    for (let n of buttony) {
      n.addEventListener("click", (event) => {
        const przycisk = event.target.value;

        let off = this.root.querySelectorAll(".stacksize2");
        let chart1 = this.root.querySelector(".HUSBfish");
        let chart2 = this.root.querySelector(".HUBBfish");
        let chart3 = this.root.querySelector(".SBvBBfish");
        let chart4 = this.root.querySelector(".BBvSBfish");
        let chart5 = this.root.querySelector(".SBvBTNfish");
        let chart6 = this.root.querySelector(".BBvBTNfish");
        let chart7 = this.root.querySelector(".BTNfish");
        switch (przycisk) {
          case "HUSBfish":
            off.forEach((element) => {
              element.style.display = "none";
            });
            console.log(chart1);
            chart1.style.display = "flex";
            console.log(chart1);
            break;
          case "HUBBfish":
            off.forEach((element) => {
              element.style.display = "none";
            });
            chart2.style.display = "flex";
            break;
          case "SBvBBfish":
            off.forEach((element) => {
              element.style.display = "none";
            });
            chart3.style.display = "flex";
            break;
          case "BBvSBfish":
            off.forEach((element) => {
              element.style.display = "none";
            });
            chart4.style.display = "flex";
            break;
          case "SBvBTNfish":
            off.forEach((element) => {
              element.style.display = "none";
            });
            chart5.style.display = "flex";
            break;
          case "BBvBTNfish":
            off.forEach((element) => {
              element.style.display = "none";
            });
            chart6.style.display = "flex";
            break;
          case "BTNfish":
            off.forEach((element) => {
              element.style.display = "none";
            });
            chart7.style.display = "flex";
            break;
        }
      });
    }
  }
}

customElements.define("charts-page", Charts);
