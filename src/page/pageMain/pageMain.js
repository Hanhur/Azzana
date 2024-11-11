import { getSectionMain } from "../../components/main/sectionMain";
import { getBestsellers } from "../../components/bestsellers/bestsellers";
import { getValues } from "../../components/values/values";
import "./pageMain.css";

export function getPageMain()
{
    const main = document.createElement("main");
    main.className = "main";

    const sectionMain = getSectionMain();
    const bestsellers = getBestsellers();
    const values = getValues();

    main.append(
        sectionMain,
        bestsellers,
        values,
    );

    return main;
}