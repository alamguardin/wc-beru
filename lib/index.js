import styles from './style.css?inline';

const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);

export class MyButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [sheet];
    const btn = document.createElement("button");
    btn.textContent = this.getAttribute("label") || "Click me!";
    btn.onclick = () => alert("Button clicked!");
    shadow.appendChild(btn);
  }
}

customElements.define("my-button", MyButton);