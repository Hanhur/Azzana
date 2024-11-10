import { getPageHeader } from "./src/page/pageHeader/pageHeader";
import { getPageMain } from "./src/page/pageMain/pageMain";

const app = document.querySelector("#app");

const header = getPageHeader();
const main = getPageMain();


app.append(header, main);