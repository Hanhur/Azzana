import images1 from "../../img/servic/images1.svg";
import images2 from "../../img/servic/images2.svg";
import images3 from "../../img/servic/images3.svg";
import images4 from "../../img/servic/images4.svg";

import "./servic.css";

export function getServic()
{
    const section = document.createElement("section");
    section.className = "section-servic";

    const container = document.createElement("div");
    container.className = "container";

    const servicBlock = document.createElement("div");
    servicBlock.className = "servic-block";
    servicBlock.innerHTML = `
        <div class="servic-box">
            <img class="servic-img" src="${images1}">
            <p class="servic-text">FREE TRACKED DELIVERY</p>
        </div>
        <div class="servic-box">
            <img class="servic-img" src="${images2}">
            <p class="servic-text">QUICK RETURNS AND EXCHANGES</p>
        </div>
        <div class="servic-box">
            <img class="servic-img" src="${images3}">
            <p class="servic-text">24/7  CUSTOMER SERVICE</p>
        </div>
        <div class="servic-box">
            <img class="servic-img" src="${images4}">
            <p class="servic-text">100% SECURE PAYMENT</p>
        </div>
    `;

    section.append(container);
    container.append(servicBlock);

    return section;
}