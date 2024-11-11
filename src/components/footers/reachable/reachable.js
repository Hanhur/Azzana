import "./reachable.css";

export function getReachable()
{
    const reachableBlock = document.createElement("div");
    reachableBlock.className = "reachable-block";
    reachableBlock.innerHTML = `
        <h2 class="reachable-block-title">REACHABLE 24/7</h2>
        <p class="reachable-block-text">
            A question ? We can be reached by 
            email 7/7, do not hesitate to send us a 
            message for any request.
        </p>
        <address class="reachable-block-address">
            <a class="reachable-block-email" href="mailto:info@azzanabijoux.fr">info@azzanabijoux.fr</a>
        </address>
    `;

    return reachableBlock;
}