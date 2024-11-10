import { getPageHeader } from "./src/page/pageHeader/pageHeader";

const app = document.querySelector("#app");

const header = getPageHeader();


app.append(header);