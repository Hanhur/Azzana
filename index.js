import { getPageHeader } from "./src/page/pageHeader/pageHeader";
import { getPageMain } from "./src/page/pageMain/pageMain";
import { getPageFooter } from "./src/page/pageFooter/pageFooter";
import { getCreditCarts } from "./src/components/creditCarts/creditCarts";

const app = document.querySelector("#app");

const header = getPageHeader();
const main = getPageMain();
const footer = getPageFooter();
const creditCarts = getCreditCarts();


app.append(header, main, footer, creditCarts);