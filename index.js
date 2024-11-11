import { getPageHeader } from "./src/page/pageHeader/pageHeader";
import { getPageMain } from "./src/page/pageMain/pageMain";
import { getPageFooter } from "./src/page/pageFooter/pageFooter";

const app = document.querySelector("#app");

const header = getPageHeader();
const main = getPageMain();
const footer = getPageFooter();


app.append(header, main, footer);