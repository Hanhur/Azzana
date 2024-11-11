import "./menu.css";

export function getMenu()
{
    const menuBlock = document.createElement("div");
    menuBlock.className = "menu-block";
    menuBlock.innerHTML = `
        <h2 class="menu-block-title">MENU</h2>
        <ul class="menu-block-list">
            <li class="menu-block-item">
                <a class="menu-block-link">Home</a>
            </li>
            <li class="menu-block-item">
                <a class="menu-block-link">Necklaces</a>
            </li>
            <li class="menu-block-item">
                <a class="menu-block-link">Braceltes</a>
            </li>
            <li class="menu-block-item">
                <a class="menu-block-link">Rings</a>
            </li>
            <li class="menu-block-item">
                <a class="menu-block-link">Earrings</a>
            </li>
            <li class="menu-block-item">
                <a class="menu-block-link">Ankle Bracelets</a>
            </li>
        </ul>
    `;

    return menuBlock;
}