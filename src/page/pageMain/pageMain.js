import { getSectionMain } from "../../components/main/sectionMain";
import "./pageMain.css";

export function getPageMain()
{
    const main = document.createElement("main");
    main.className = "main";

    const sectionMain = getSectionMain();

    main.append(
        sectionMain,
    );

    return main;
}