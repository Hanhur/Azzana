import "./support.css";

export function getSupport()
{
    const supportBlock = document.createElement("div");
    supportBlock.className = "support-block";
    supportBlock.innerHTML = `
        <h2 class="support-block-title">SUPPORT</h2>
        <ul class="support-block-list">
            <li class="support-block-item">
                <a class="support-block-link">Frequently Asked Questions</a>
            </li>
            <li class="support-block-item">
                <a class="support-block-link">Returns and Refunds</a>
            </li>
            <li class="support-block-item">
                <a class="support-block-link">CGV</a>
            </li>
            <li class="support-block-item">
                <a class="support-block-link">Legal Notice</a>
            </li>
            <li class="support-block-item">
                <a class="support-block-link">Track my order</a>
            </li>
        </ul>
    `;
   
    return supportBlock;
}