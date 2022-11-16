class MenuBtns extends HTMLElement {
  constructor() {
    super();
  }

  _shadow = this.attachShadow({ mode: "open" });

  // vars
  data = DATA.dataJson;

  // elems
  customModal_parent = document.querySelector("custom-modal");
  addNewBtn;
  saveJsonBtn;
  searchBtn;
  filterBtn;
  hamburgerBtn;

  connectedCallback() {
    this.#render();
  }

  #styles = `
    <style>    
        button {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            bottom: 10px;
            right: 10px;
            border-radius: 100px;
            width: 100px;
            height: 100px;
            background-color: #304fad;
            cursor: pointer;
            box-shadow: 5px 5px 5px 0px #000;
            border: none;
            transition: 0.5s ease all;
        }
    
        button img {
            height: 100%;
        }
    
        .filterBtn img,
        .saveJsonBtn img,
        .searchBtn img {
            height: 50%;
        }

        .saveJsonDataOpen {
            bottom: 385px;
        }

        .filterGamesOpen, 
        .activeMenuBtn {
            bottom: 135px;
        }

        .searchGamesOpen {
            bottom: 260px;
        }

        h1{
            display: flex;
            justify-content: center;
            align-content: center;
            position: fixed;
            left: 50%;
            right: 50%;
            transform: translate(-50%, -50%);
            bottom: 70vh;
            color: #fff;
            width: 80vw;
            text-shadow: 5px 5px black;
            font-size: 3em;
        }

        .addNewGameNoData {
            left: 50%;
            right: 50%;
            transform: translate(-50%, -50%);
            bottom: 50vh;
        }

        .activeMenuBtn {
            background-color: #663399;
        }

        .hide{
            display: none;
        }
    </style>
  `;

  #openMenu() {
    this.filterBtn.classList.add("filterGamesOpen");
    this.saveJsonBtn.classList.add("saveJsonDataOpen");
    this.searchBtn.classList.add("searchGamesOpen");
    this.hamburgerBtn.classList.add("hide");
  }

  #render() {
    if (this.data.length > 0) {
      let menuHTML = `
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
          ${this.#styles}
  
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
        ${this.#styles}

        ${menuHTML}
      `;

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

window.customElements.define(`menu-btns`, MenuBtns);
