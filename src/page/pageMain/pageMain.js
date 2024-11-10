import { getSectionMain } from "../../components/main/sectionMain";
import { getBestsellers } from "../../components/bestsellers/bestsellers";
import "./pageMain.css";

export function getPageMain()
{
    const main = document.createElement("main");
    main.className = "main";

    const sectionMain = getSectionMain();
    const bestsellers = getBestsellers();

    main.append(
        sectionMain,
        bestsellers,
    );

    return main;
}