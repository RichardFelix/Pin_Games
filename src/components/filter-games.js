import { CustomModal } from "./custom-modal";
import styles from "../css/filter-games.css";

export class FilterForm extends CustomModal {
  constructor() {
    super();
  }

  // elems
  clearFilterBtn;
  filterBtn;
  platformsSelectBx;

  connectedCallback() {
    this.#render();
  }

  #closeModal() {
    const closeModal = new Event("closeModal");
    this.dispatchEvent(closeModal);
  }

  // filter Games logic
  #filterGamesLogic(filters) {
    return new Promise((resolve, reject) => {
      let filtredPlatform = this.data.filter(
        (item) => item.platform === filters.platformFilter
      );

      resolve(filtredPlatform);
    }).catch((err) => {
      console.log(`filterGamesLogic function failed - ${err}`);
      reject(err);
    });
  }

  // filter btn click
  async #filterGames() {
    let filtredPlatform = await this.#filterGamesLogic({
      platformFilter: this.platformsSelectBx.value,
    });

    for (let x = 0; x < this.gameImageCount; x++) {
      this.gameCard_parent
        .querySelectorAll("game-card")
        [x].setAttribute("hide", "");
    }

    filtredPlatform.forEach((item) => {
      this.gameCard_parent
        .getElementById(`${item.name}`)
        .removeAttribute("hide");
    });

    this.filterMenuBtn_parent.classList.add("filterGamesOpen");
    this.filterMenuBtn_parent.classList.add("activeMenuBtn");
    this.searchMenuBtn_parent.classList.remove("activeMenuBtn");
    this.clearFilterBtn.removeAttribute("disabled");
    this.#closeModal();
  }

  // clear filters
  #clearFilters() {
    for (let x = 0; x < this.gameImageCount; x++) {
      this.gameCard_parent
        .querySelectorAll("game-card")
        [x].removeAttribute("hide");
    }

    this.filterMenuBtn_parent.classList.remove("activeMenuBtn");
    this.clearFilterBtn.setAttribute("disabled", "true");
    this.#closeModal();
  }

  attributeChangedCallback(prop, oldValue, newValue) {
    if (oldValue === newValue) return;
  }

  static get observedAttributes() {
    return ["open"];
  }

  #render() {
    this._shadow.innerHTML = `
          <style>    
            ${this.commonStyles}
            ${styles}
          </style>
  
          <h2 class="header">Filter</h2>
          <label for="platformsSelectBx"> Platform </label>
          <select id="platformsSelectBx" name="platform" required></select>
          <button id="filterBtn" class="greenBtn" type="submit">
            Filter
          </button>
          <button id="clearFilterBtn" class="blueBtn" disabled>Clear Filter</button>
        `;

    // shadowRoot elements init
    this.clearFilterBtn = this.shadowRoot.getElementById("clearFilterBtn");
    this.filterBtn = this.shadowRoot.getElementById("filterBtn");
    this.platformsSelectBx =
      this.shadowRoot.getElementById("platformsSelectBx");

    // add options to select box
    this.platforms.forEach((item) => {
      this.platformsSelectBx.innerHTML += `<option value="${item}"> ${item}</option>`;
    });

    // event listeners
    this.filterBtn.onclick = () => this.#filterGames();
    this.clearFilterBtn.onclick = () => this.#clearFilters();
  }
}

// window.customElements.define(`filter-games`, filterForm);
