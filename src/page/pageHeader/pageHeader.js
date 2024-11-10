import search from "../../img/search.svg";
import cosh from "../../img/cosh.svg";
import logo from "../../img/logo.png";

import "./pageHeader.css";
                                   
const headreArray_1 = ["Home ", "Necklaces", "Braceltes", "Rings"];
const headreArray_2 = ["Earrings", "Ankle Bracelets", "All", "Track My Oreder"];
            
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

    const headerBlock = document.createElement("div");
    headerBlock.className = "header-block";

    const headerList_1 = document.createElement("ul");
    headerList_1.className = "header-list";

    headreArray_1.forEach(function(item)
    {
        const items = document.createElement("li");
        items.className = "header-items";

        const link = document.createElement("a");
        link.className = "header-link";
        link.href = "#";

        headerList_1.appendChild(items);
        items.appendChild(link);

        link.innerHTML = item;
    });

    const headerList_2 = document.createElement("ul");
    headerList_2.className = "header-list";

    headreArray_2.forEach(function(item)
    {
        const items = document.createElement("li");
        items.className = "header-items";

        const link = document.createElement("a");
        link.className = "header-link";
        link.href = "#";

        headerList_2.appendChild(items);
        items.appendChild(link);

        link.innerHTML = item;
    });

    const headerImg = document.createElement("img");
    headerImg.className = "header-img";
    headerImg.src = logo;
    headerImg.alt = "Azzana";
    

    header.append(headerDiv);
    header.append(container);
    container.append(headerBlock);
    headerBlock.append(headerList_1, headerImg, headerList_2);

    return header;
}