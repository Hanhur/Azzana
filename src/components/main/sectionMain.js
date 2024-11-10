import "./sectionMain.css";

export function getSectionMain()
{
    const section = document.createElement("section");
    section.className = "section-main";

    const container = document.createElement("div");
    container.className = "container";

    const sectionBlock = document.createElement("div");
    sectionBlock.className = "section-block";
    sectionBlock.innerHTML = `
        <h1 class="section-block-title">Black Friday</h1>
        <p class="section-block-text">2 Bijoux Achetes le 3eme Offert !</p>
        <button class="section-block-btn">Discover the Jewelry</button>
    `;

    section.append(container);
    container.append(sectionBlock);

    return section;
}