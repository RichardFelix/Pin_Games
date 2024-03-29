import { CustomModal } from "./custom-modal";
import styles from "../css/search-games.css";

export class SearchGames extends CustomModal {
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

  #search(e) {
    e.preventDefault();

    let searchResult = this.data.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(this.datalistInput.value.toLowerCase());
    });

    if (searchResult.length > 0 && this.datalistInput.value.length > 0) {
      for (let x = 0; x < this.gameImageCount; x++) {
        this.gameCard_parent
          .querySelectorAll("game-card")
          [x].setAttribute("hide", "");
      }

      searchResult.forEach((item) => {
        this.gameCard_parent
          .getElementById(`${item.name}`)
          .removeAttribute("hide");
      });

      this.searchMenuBtn_parent.classList.add("searchGamesOpen");
      this.searchMenuBtn_parent.classList.add("activeMenuBtn");
      this.filterMenuBtn_parent.classList.remove("activeMenuBtn");
      this.clearSearchBtn.removeAttribute("disabled");
      this.#closeModal();
    } else {
      this.datalistInput.classList.add("error");
    }
  }

  #clearSearch(e) {
    e.preventDefault();

    for (let x = 0; x < this.gameImageCount; x++) {
      this.gameCard_parent
        .querySelectorAll("game-card")
        [x].removeAttribute("hide");
    }

    this.#closeModal();
    this.searchMenuBtn_parent.classList.remove("activeMenuBtn");
    this.clearSearchBtn.setAttribute("disabled", "true");
  }

  #keydown() {
    this.datalistInput.classList.remove("error");
  }

  attributeChangedCallback(prop, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (prop === "open") {
      this.datalistInput.value = "";
      this.datalistInput.focus();
      this.datalistInput.classList.remove("error");
    }
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

       <form method="POST" action="">
          <h2 class="header">Search</h2>
          <label for="datalistInput"> Search for Games </label>
          <input id="datalistInput" list="datalistGames" placeholder="" />
          <datalist id="datalistGames" name="datalist" required></datalist>
          <button id="searchBtn" class="greenBtn" type="submit" value="Filter">
            Search
          </button>
          <button id="clearSearchBtn" class="blueBtn" disabled>Clear Search</button>
        </form>
      `;

    // shadowRoot elements init
    this.datalistInput = this.shadowRoot.getElementById("datalistInput");
    this.datalistGames = this.shadowRoot.getElementById("datalistGames");
    this.searchBtn = this.shadowRoot.getElementById("searchBtn");
    this.clearSearchBtn = this.shadowRoot.getElementById("clearSearchBtn");

    // add options to datalist
    this.data.forEach((item) => {
      this.datalistGames.innerHTML += `<option value="${item.name}"> ${item.name}</option>`;
    });

    // event listeners
    this.datalistInput.onkeydown = (e) => this.#keydown(e);
    this.clearSearchBtn.onclick = (e) => this.#clearSearch(e);
    this.searchBtn.onclick = (e) => this.#search(e);
  }
}

// window.customElements.define(`search-games`, SearchGames);
