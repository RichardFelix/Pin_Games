import styles from "../css/menu-btns.css";

export class MenuBtns extends HTMLElement {
  constructor() {
    super();
  }

  _shadow = this.attachShadow({ mode: "open" });

  // vars
  data = DATA.dataJson;

  // elems
  customModal_parent = document.querySelector("custom-modal");

  connectedCallback() {
    this.#render();
  }

  #openMenu() {
    this.filterBtn.classList.add("filterGamesOpen");
    this.saveJsonBtn.classList.add("saveJsonDataOpen");
    this.searchBtn.classList.add("searchGamesOpen");
    this.hamburgerBtn.classList.add("hide");
  }

  #render() {
    if (this.data.length > 0) {
      let menuHTML = `
          <style>
              ${styles}
          </style>
  
          <button id="saveJsonBtn" class="saveJsonBtn"> 
              <img
              src="img/saveJsonBtn.png"
              alt="Backup Data Image"
              title="Backup Data"
              />
          </button>
      
          <button id="searchBtn" class="searchBtn">
              <img src="img/search.png" alt="Search Games" title="Search Games" />
          </button>
      
          <button id="filterBtn" class="filterBtn">
              <img src="img/sortBtn.png" alt="Filter Games" title="Filter Games" />
          </button>
      
          <button id="addNewBtn" class="addNewBtn">
              <img src="img/new_game.png" alt="Add a New Game" title="Add a New Game" />
          </button>
      
          <button id="hamburgerBtn" class="hamburgerBtn">
              <img src="img/hamburgerBtn.png" alt="Open Menu" title="Open Menu" />
          </button>
        `;

      this._shadow.innerHTML = `

            ${menuHTML}
      `;

      // shadowRoot elements init
      this.hamburgerBtn = this.shadowRoot.getElementById("hamburgerBtn");
      this.saveJsonBtn = this.shadowRoot.getElementById("saveJsonBtn");
      this.searchBtn = this.shadowRoot.getElementById("searchBtn");
      this.filterBtn = this.shadowRoot.getElementById("filterBtn");
      this.addNewBtn = this.shadowRoot.getElementById("addNewBtn");

      // event listeners
      this.hamburgerBtn.onclick = () => this.#openMenu();

      this.saveJsonBtn.onclick = () => {
        this.customModal_parent.setAttribute("open", "saveData");
      };

      this.filterBtn.onclick = () => {
        this.customModal_parent.setAttribute("open", "filter");
      };

      this.searchBtn.onclick = () => {
        this.customModal_parent.setAttribute("open", "search");
      };

      this.addNewBtn.onclick = () => {
        this.customModal_parent.setAttribute("open", "addGame");
      };
    } else {
      let menuHTML = `
          <h1>Add Some Games</h1>
          <button id="addNewGameNoData" class="addNewGameNoData">
              <img src="img/new_game.png" alt="Add a New Game" title="Add a New Game" />
          </button>
        `;

      this._shadow.innerHTML = `
          <style>
              ${styles}
          </style>

          ${menuHTML}
        `;
      // this._shadowRoot.adoptedStyleSheets = [sheet];

      // shadowRoot elements init
      this.addNewGameNoData =
        this.shadowRoot.getElementById("addNewGameNoData");

      // event listeners
      this.addNewGameNoData.onclick = () => {
        this.customModal_parent.setAttribute("open", "addGame");
      };
    }
  }
}

// window.customElements.define(`menu-btns`, MenuBtns);
