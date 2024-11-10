import images1 from "../../img/bestsellers/images1.png";
import images2 from "../../img/bestsellers/images2.png";
import images3 from "../../img/bestsellers/images3.png";
import images4 from "../../img/bestsellers/images4.png";
import images5 from "../../img/bestsellers/images5.png";
import images6 from "../../img/bestsellers/images6.png";
import images7 from "../../img/bestsellers/images7.png";
import images8 from "../../img/bestsellers/images8.png";
import images9 from "../../img/bestsellers/images9.svg";
import images10 from "../../img/bestsellers/images10.svg";

import "./bestsellers.css";

const bestsellersArray = [images1, images2, images3, images4, images5, images6, images7, images8];

export function getBestsellers()
{
    const section = document.createElement("section");
    section.className = "section-bestsellers";

    const container = document.createElement("div");
    container.className = "container";

    const shippingBlock = document.createElement("div");
    shippingBlock.className = "shipping-block";
    shippingBlock.innerHTML = `
        <p class="shipping-text">FREE SHIPPING FR</p>
        <h2 class="shipping-title">The Bestsellers</h2>
    `;

    const bestsellersBlock = document.createElement("div");
    bestsellersBlock.className = "bestsellers-block";

    const listItems = bestsellersArray.map(imageSrc => `
       <ul class="bestsellers-list">
            <li class="bestsellers-item">
                <img class="bestsellers-img" src="${imageSrc}" alt="Person Image">
                <div class="bestsellers-box">
                    <h3 class="bestsellers-title">NECKLACE "MURATO"</h3>
                    <div class="bestsellers_box">
                        <span class="bestsellers-span">$ 19.99</span>
                        <span class="bestsellers_span">$ 23.00</span>
                    </div>
                    <div class="bestsellers-box_img">
                        <img class="bestsellers_img" src="${images9}">
                        <img class="bestsellers_img" src="${images9}">
                        <img class="bestsellers_img" src="${images9}">
                        <img class="bestsellers_img" src="${images9}">
                        <img class="bestsellers_img" src="${images10}">
                    </div>
                </div>
            </li>
       </ul>
    `).join("");


    bestsellersBlock.innerHTML = listItems;

    section.append(container);
    container.append(shippingBlock, bestsellersBlock);

    return section;
}