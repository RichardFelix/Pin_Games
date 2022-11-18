import styles from "../css/game-card.css";
import { GameSection } from "./game-section";

export class GameCard extends GameSection {
  constructor() {
    super();
  }

  gameImage;

  connectedCallback() {
    this.#render();
  }

  #openEditModal() {
    let name = this.getAttribute("id");

    this.customModal.setAttribute("open", "editGame");
    this.customModal.setAttribute("name", `${name}`);
  }

  attributeChangedCallback(prop, oldValue, newValue) {
    if (oldValue === newValue) return;
  }

  static get observedAttributes() {
    return ["hide"];
  }

  #render() {
    let name = this.getAttribute("name");
    let imageLocation = this.getAttribute("imageLocation");
    let platform = this.getAttribute("platform");

    this._shadow.innerHTML = `
        <style>
            ${styles}
        </style>
        
        <img
          class="gameImage"
          src='${imageLocation}'
          alt='${name}'
          title='${platform}'
        ></img>
      `;

    // shadowRoot elements init
    this.gameImage = this.shadowRoot.querySelector(".gameImage");

    // event handlers
    this.gameImage.onclick = () => this.#openEditModal();
  }
}

// window.customElements.define(`game-card`, GameCard);
