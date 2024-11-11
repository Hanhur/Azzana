import vector from "../../img/vector.svg";
import images1 from "../../img/shippingBestsellers/images1.png";
import images2 from "../../img/shippingBestsellers/images2.png";
import images3 from "../../img/shippingBestsellers/images3.png";
import images4 from "../../img/shippingBestsellers/images4.png";
import images5 from "../../img/shippingBestsellers/images5.png";

import "./shippingBestsellers.css";

const shippingBestsellersArray = [images1, images2, images4, images5];

export function getShippingBestsellers()
{
    const section = document.createElement("section");
    section.className = "section-shipping-bestsellers";

    const container = document.createElement("div");
    container.className = "container";

    const blockInner = document.createElement("div");
    blockInner.className ="block-inner";

    const shippingBestsellersBlock = document.createElement("div");
    shippingBestsellersBlock.className = "shipping-bestsellers";
    shippingBestsellersBlock.innerHTML = `
        <div class="shipping-bestsellers-block">
            <p class="shipping-bestsellers-text">FREE SHIPPING FR</p>
            <h2 class="shipping-bestsellers-title">The Bestsellers</h2>
            <p class="shipping-bestsellers_text">
                At Azzana, we believe that you deserve the best, and that you should
                not choose between quality, affordable prices,and real values.At Azzana,
                we believe that you deserve the best, and that you should not choose
                between quality, affordable prices, and real values. At Azzana, we believe
                that you deserve the best.
            </p>
            <div class="shipping-bestsellers-box">
                <span class="shipping-bestsellers-span">VIEW</span>
                <img class="shipping-bestsellers-img" src="${vector}" width="30">
            </div>
        </div>
        <img class="shipping-bestsellers_img" src="${images3}">
        <div class="shipping__bestsellers">
            <p class="rings">ear rings</p>
            <button class="button">Discover</button>
        </div>
    `;

    const BestsellersBlock = document.createElement("div");
    BestsellersBlock.className = "shipping-bestsellers_box";

    const listItems = shippingBestsellersArray.map(imageSrc => `
        <img class="shipping-bestsellers__img" src="${imageSrc}" alt="Person Image">
    `).join("");

    BestsellersBlock.innerHTML = listItems;

    section.append(container);
    container.append(blockInner);
    blockInner.append(shippingBestsellersBlock, BestsellersBlock);

    return section;
}