import { getAboutShop } from "../../components/footers/aboutShop/aboutShop";
import { getMenu } from "../../components/footers/menu/menu";
import { getSupport } from "../../components/footers/support/support";
import { getReachable } from "../../components/footers/reachable/reachable";

import "./pageFooter.css";

export function getPageFooter()
{
    const footer = document.createElement("footer");
    footer.className = "footer";

    const container = document.createElement("div");
    container.className = "container";

    const footerBlock = document.createElement("div");
    footerBlock.className = "footer-block";

    const shop = getAboutShop();
    const menu = getMenu();
    const support = getSupport();
    const reachable = getReachable();

    footer.append(container);
    container.append(footerBlock);
    footerBlock.append(
        shop,
        menu,
        support,
        reachable,
    );

    return footer;
}