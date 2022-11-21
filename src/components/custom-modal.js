import styles from "../css/custom-modal.css";
import commonStyles from "../css/commonModalStyles.css";

export class CustomModal extends HTMLElement {
  constructor() {
    super();
  }

  _shadow = this.attachShadow({ mode: "open" });

  // elems
  gameCard_parent = document.querySelector("game-section").shadowRoot;

  // menu buttons
  menuBtns_parent = document.querySelector("menu-btns").shadowRoot;
  saveMenuBtn_parent = this.menuBtns_parent.getElementById("saveJsonBtn");
  searchMenuBtn_parent = this.menuBtns_parent.getElementById("searchBtn");
  filterMenuBtn_parent = this.menuBtns_parent.getElementById("filterBtn");
  addNewGameBtn_parent = this.menuBtns_parent.getElementById("addNewBtn");
  hamburgerMenuBtn_parent = this.menuBtns_parent.getElementById("hamburgerBtn");

  // vars
  data = DATA.dataJson;
  gameImageCount = this.data.length;
  platforms = DATA.PLATFORMS;
  category = DATA.CATEGORY;

  // common css for forms
  commonStyles = `${commonStyles}`;

  connectedCallback() {
    this.#render();
  }

  #closeBtn() {
    if (this.hasAttribute("open")) {
      this.removeAttribute("open");
    }

    if (this.hasAttribute("name")) {
      this.removeAttribute("name");
    }

    if (this.editGame.hasAttribute("name")) {
      this.editGame.removeAttribute("name");
    }

    this.#closeMenu();
  }

  #closeMenu() {
    if (this.gameImageCount !== 0) {
      if (
        this.filterMenuBtn_parent.classList.contains("activeMenuBtn") === true
      ) {
        this.searchMenuBtn_parent.classList.remove("searchGamesOpen");
      } else {
        this.filterMenuBtn_parent.classList.remove("filterGamesOpen");
        this.searchMenuBtn_parent.classList.remove("searchGamesOpen");
      }

      this.saveMenuBtn_parent.classList.remove("saveJsonDataOpen");
      this.hamburgerMenuBtn_parent.classList.remove("hide");
    }
  }

  attributeChangedCallback(prop, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (prop === "open") {
      // hide child modal
      this.filterGames.removeAttribute("open");
      this.searchGames.removeAttribute("open");
      this.saveData.removeAttribute("open");
      this.editGame.removeAttribute("open");
      this.addGame.removeAttribute("open");

      // show child modal
      switch (newValue) {
        case "filter":
          this.filterGames.setAttribute("open", "");
          break;
        case "search":
          this.searchGames.setAttribute("open", "");
          break;
        case "saveData":
          this.saveData.setAttribute("open", "");
          break;
        case "editGame":
          this.editGame.setAttribute("open", "");
          break;
        case "addGame":
          this.addGame.setAttribute("open", "");
          break;
        default:
          break;
      }
    }

    if (prop === "close") {
      this.#closeBtn();
    }

    if (prop === "name" && newValue !== null) {
      this.editGame.setAttribute("name", this.getAttribute("name"));
    }
  }

  static get observedAttributes() {
    return ["open", "name", "close"];
  }

  #render() {
    this._shadow.innerHTML = `
        <style>
            ${styles}
        </style>
  
        <div id="backdrop" class="backdrop"></div>
        <div class="modal">
          <button id="closeBtn" class="closeBtn">
            <img class="closeBtnImg" src="img/new_game.png" alt="Close Form" />
          </button>
          <filter-games></filter-games>
          <search-games></search-games>
          <save-data></save-data>
          <edit-game></edit-game>
          <add-game></add-game>
        </div>
      `;

    // shadowRoot elements init
    let closeBtn = this.shadowRoot.querySelector("#closeBtn");
    let backdrop = this.shadowRoot.querySelector("#backdrop");
    this.editGame = this.shadowRoot.querySelector("edit-game");
    this.filterGames = this.shadowRoot.querySelector("filter-games");
    this.searchGames = this.shadowRoot.querySelector("search-games");
    this.saveData = this.shadowRoot.querySelector("save-data");
    this.addGame = this.shadowRoot.querySelector("add-game");

    // event handlers
    closeBtn.onclick = () => this.#closeBtn();
    backdrop.onclick = () => this.#closeBtn();

    // esc button closes modal
    document.onkeydown = (e) => {
      let host = document.querySelector("custom-modal");

      if (e.key == "Escape") {
        if (host.hasAttribute("close")) {
          host.removeAttribute("close");
        } else {
          host.setAttribute("close", "");
        }
      }
    };

    // custom event listeners
    this.filterGames.addEventListener("closeModal", () => this.#closeBtn());
    this.searchGames.addEventListener("closeModal", () => this.#closeBtn());
    this.saveData.addEventListener("closeModal", () => this.#closeBtn());
    this.editGame.addEventListener("closeModal", () => this.#closeBtn());
    this.addGame.addEventListener("closeModal", () => this.#closeBtn());
  }
}

// window.customElements.define(`custom-modal`, CustomModal);
