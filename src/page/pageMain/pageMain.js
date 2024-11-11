import { getSectionMain } from "../../components/main/sectionMain";
import { getBestsellers } from "../../components/bestsellers/bestsellers";
import { getValues } from "../../components/values/values";
import { getShippingBestsellers } from "../../components/shippingBestsellers/shippingBestsellers";
import "./pageMain.css";

export function getPageMain()
{
    const main = document.createElement("main");
    main.className = "main";

    const sectionMain = getSectionMain();
    const bestsellers = getBestsellers();
    const values = getValues();
    const shippingBestsellers = getShippingBestsellers();

    main.append(
        sectionMain,
        bestsellers,
        values,
        shippingBestsellers,
    );

    return main;
}