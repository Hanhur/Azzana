import visa from "../../img/visa.svg";
import masterCard from "../../img/mastercard.svg";
import americanExpress from "../../img/americanexpress.svg";
import payPal from "../../img/paypal.svg";

import "./creditCarts.css";

export function getCreditCarts()
{
    const carts = document.createElement("div");
    carts.className = "carts";

    const container = document.createElement("div");
    container.className = "container";

    const creaditCartsBlock = document.createElement("div");
    creaditCartsBlock.className = "credit-carts";
    creaditCartsBlock.innerHTML = `
        <p class="credit-carts-title">© AZZANA - MINIMALIST JEWELRY 2018-2020</p>
        <div class="credit-carts-box">
            <a class="credit-carts-link">
                <img class="credit-carts-img" src="${visa}">
            </a>
             <a class="credit-carts-link">
                <img class="credit-carts-img" src="${masterCard}">
            </a>
             <a class="credit-carts-link">
                <img class="credit-carts-img" src="${americanExpress}">
            </a>
             <a class="credit-carts-link">
                <img class="credit-carts-img" src="${payPal}">
            </a>
        </div>
    `;

    carts.append(container);
    container.append(creaditCartsBlock);

    return carts;
}