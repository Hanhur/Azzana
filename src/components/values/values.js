import "./values.css";

export function getValues()
{
    const section = document.createElement("section");
    section.className = "section-values";

    const container = document.createElement("div");
    container.className = "container";

    const valuesBlock = document.createElement("div");
    valuesBlock.className = "values-block";
    valuesBlock.innerHTML = `
        <h2 class="values-title">
            OUR 
            <span class="values-span">VALUES</span>
        </h2>
        <p class="values-text">
            At Azzana, we believe that you deserve the best, and that you
            should not choose between quality, affordable prices,
            and real values.
        </p>
        <p class="values-text">
            Quality has never been so affordable thanks to our collection of
            more than 200 minimalist jewels, ready to accompany you
            everywhere! :)
        </p>
    `;

    section.append(container);
    container.append(valuesBlock);

    return section;
}