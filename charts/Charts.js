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

    const buttony = this.root.querySelectorAll(".button-poz");

    for (let n of buttony)
      n.addEventListener("click", (event) => {
        const przycisk = event.target.value;
        const sheet = document.querySelector(".sheet-chart");

        switch (przycisk) {
          case "HUSBfish":
            sheet.href = "./CSS-charts/fishHUSB16.css";
            break;
          case "HUSBfish":
            sheet.href = "./CSS-charts/fishHUSB16.css";
            break;
          case "HUSBfish":
            sheet.href = "./CSS-charts/fishHUSB16.css";
            break;
          case "HUSBfish":
            sheet.href = "./CSS-charts/fishHUSB16.css";
            break;
          case "HUSBfish":
            sheet.href = "./CSS-charts/fishHUSB16.css";
            break;
        }
      });
  }
}

customElements.define("charts-page", Charts);
