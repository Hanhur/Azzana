import search from "../../img/search.svg";
import cosh from "../../img/cosh.svg";

import "./pageHeader.css";

export function getPageHeader()
{
    const header = document.createElement("header");
    header.className = "page-header";

    const headerDiv = document.createElement("div");
    headerDiv.className = "header-div";
    headerDiv.innerHTML = `
        <p class="header-div-text">CHRISTMAS SALE: 2 JEWELERY PURCHASED, THE 3rd FREE! / FREE DELIVERY FR</p>
        <img class="header-div-img" src="${search}">
        <p class="header-div_text">SEARCH</p>
        <img class="header-div_img" src="${cosh}">
    `;

    const container = document.createElement("div");
    container.className = "container";

    header.append(headerDiv);

    header.append(container);

    return header;
}