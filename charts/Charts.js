export class Charts extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });

    const styles = document.createElement("style");
    this.root.appendChild(styles);

    //TODO zaaplikowac do shadow DOM style z case 

    async function loadCSS() {
      const request = await fetch("../charts/base.css");
      const css = await request.text();
      styles.textContent = css;
    }
    loadCSS();
  }

  connectedCallback() {
    const template = document.querySelector("#charts-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    const buttony = this.root.querySelectorAll(".button-poz");

    for (let n of buttony)
      n.addEventListener("click", (event) => {
        const przycisk = event.target.value;
        const sheet = document.querySelector(".sheet-chart");

        switch (przycisk) {
          case "HUSBfish":
            sheet.href = "./CSS-charts/fishHUSB16.css";
            break;
        }
      });
  }
}

customElements.define("charts-page", Charts);
