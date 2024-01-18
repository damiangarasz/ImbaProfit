const buttony = document.querySelectorAll(".button-poz");

for(let n of buttony)
n.addEventListener("click", (event) => {
    const przycisk = event.target.value;
    const sheet = document.querySelector(".sheet-chart");

    switch (przycisk){
        case "HUSBfish":
        sheet.href = "./CSS-charts/fishHUSB16.css";
        break;
    }
})