import facebook from "../../../img/facebook.svg";
import twitter from "../../../img/twitter.svg";
import linkedln from "../../../img/linkedln.svg";
import insragram from "../../../img/instagram.svg";

import "./aboutShop.css";

export function getAboutShop()
{
    const aboutShopBlock = document.createElement("div");
    aboutShopBlock.className = "shop-block";
    aboutShopBlock.innerHTML = `
        <h2 class="shop-block-title">ABOUT THE SHOP</h2>
        <p class="shop-block-text">
            Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem
            Ipsum has been the industry's standard 
            dummy text ever since the 1500s
        </p>
        <ul class="shop-block-list">
            <li class="shop-block-item">
                <a class="shop-block-link">
                    <img class="shop-block-img" src="${facebook}">
                </a>
            </li>
            <li class="shop-block-item">
                <a class="shop-block-link">
                    <img class="shop-block-img twitter" src="${twitter}">
                </a>
            </li>
            <li class="shop-block-item">
                <a class="shop-block-link">
                    <img class="shop-block-img" src="${linkedln}">
                </a>
            </li>
            <li class="shop-block-item">
                <a class="shop-block-link">
                    <img class="shop-block-img" src="${insragram}">
                </a>
            </li>
        </ul>
    `;


    return aboutShopBlock;
}