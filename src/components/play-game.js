import { EditGame } from "./edit-game";
import styles from "../css/play-game.css";

export class PlayGame extends EditGame {
  constructor() {
    super();
  }

  connectedCallback() {
    this.#render();
  }

  #closeModal() {
    const closeModal = new Event("closeModal");
    this.dispatchEvent(closeModal);
  }

  #showEditForm() {
    const showEditForm = new Event("showEditForm");
    this.dispatchEvent(showEditForm);
  }

  async #pressPlayBtn() {
    const filePath = this.getAttribute("filePath");
    let path = encodeURI(filePath);
    await fetch(`/openPath/${path}`);
    this.#closeModal();
  }

  attributeChangedCallback(prop, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (prop === "name") {
      this.shadowRoot.getElementById("header").innerText = newValue;
    }
  }

  static get observedAttributes() {
    return ["open", "name"];
  }

  #render() {
    this._shadow.innerHTML = `
        <style>    
            ${this.commonStyles}
            ${styles}
        </style>
        
          <header id="header" class="header"></header>
          <button id="playBtn" class="playBtn">
          <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 58 58"
              style="enable-background: new 0 0 58 58"
              xml:space="preserve"
          >
              <circle style="fill: #ebba16" cx="29" cy="29" r="29"></circle>
              <g>
              <polygon
                  style="fill: #ffffff"
                  points="44,29 22,44 22,29.273 22,14  "
              ></polygon>
              <path
                  style="fill: #ffffff"
                  d="M22,45c-0.16,0-0.321-0.038-0.467-0.116C21.205,44.711,21,44.371,21,44V14   c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C44.836,28.36,45,28.669,45,29s-0.164,0.64-0.437,0.826   l-22,15C22.394,44.941,22.197,45,22,45z M23,15.893v26.215L42.225,29L23,15.893z"
              ></path>
              </g>
              <style xmlns="" data-source="base" class="dblt-ykjmwcnxmi"></style>
              <style
              xmlns=""
              data-source="stylesheet-processor"
              class="dblt-ykjmwcnxmi"
              ></style>
          </svg>
          </button>
          <button id="editBtn" class="blueBtn">
          Edit
          </button>
      `;

    // shadowRoot elements init
    this.playBtn = this.shadowRoot.getElementById("playBtn");
    this.editBtn = this.shadowRoot.getElementById("editBtn");

    // event listeners
    this.playBtn.onclick = () => this.#pressPlayBtn();
    this.editBtn.onclick = () => this.#showEditForm();
  }
}

// window.customElements.define(`play-game`, PlayGame);
