class customModal extends HTMLElement {
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

  // custom-elements
  filterGames;
  searchGames;
  saveData;
  editGame;
  addGame;

  // common css for forms
  commonStyles = `
    :host{
      display: none;
      text-align: center;
      flex-direction: column;
      justify-content: center;

      --greenBtn-bg: #008000;
      --blueBtn-bg: #304fad;
      --redBtn-bg: #ff0000;
      --font-color: #fff;
    }
  
    .header{
      color: var(--font-color);
      font-size: 1.3em;
      margin: 15px 0 10px 0;
      text-shadow: 2px 3px black;
    }

    label{
      color: var(--font-color);
      margin: 10px;
    }

    select,
    datalist{
      width: 85%;
      align-self: center;
    }

    button{
      border: none;
      color: var(--font-color);
      padding: 10px;
      font-size: 14px;
      cursor: pointer;
      border-radius: 20px;
      width: 50%;
    }

    .greenBtn{
      background-color: var(--greenBtn-bg);
      margin: 25px auto 10px auto;
    }

    .blueBtn{
      background-color: var(--blueBtn-bg);
      margin: 10px auto;
    }

    .redBtn{
      background-color: var(--redBtn-bg);
    }

    .error {
      border: red 4px solid;
    }

    form{
      display: flex;
      flex-direction: column;
    }

    .hide{
      display: none;
    }
  `;

  connectedCallback() {
    this.#render();
  }

  #styles = `
   <style>
      :host {
        --backdrop-bg: #000000cc;
        --modal-bg : #789;
        --closeBtn-bg: #304fad;
      }

      :host([open]) .backdrop,
      :host([open]) .modal {
        display: block;
      }
    
      .backdrop {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: var(--backdrop-bg, #000);
        display: none;
      }  
      
      .modal{
        width: 300px;
        position: fixed;
        top: 45vh;
        left: 50%;
        right: 50%;
        transform: translate(-50%, -50%);
        border: 1px #333 solid;
        background-color: var(--modal-bg);
        box-shadow: 5px 5px 5px 0px #000;
        border-radius: 10px;
        display: none;
      }

      .closeBtn{
        display: flex;
        justify-content: center;
        align-content: center;
        position: fixed;
        top: -20px;
        right: -15px;
        border-radius: 35px;
        width: 35px;
        height: 35px;
        background-color: var(--closeBtn-bg);
        cursor: pointer;
        box-shadow: 5px 5px 5px 0px #000;
        border: none;
      }

      .closeBtnImg{
        transform: rotate(45deg);
        height: 100%;
      }
    </style>
  `;

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
      ${this.#styles}

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
    closeBtn.addEventListener("click", this.#closeBtn.bind(this));
    backdrop.addEventListener("click", this.#closeBtn.bind(this));

    this.filterGames.addEventListener("closeModal", this.#closeBtn.bind(this));
    this.searchGames.addEventListener("closeModal", this.#closeBtn.bind(this));
    this.saveData.addEventListener("closeModal", this.#closeBtn.bind(this));
    this.editGame.addEventListener("closeModal", this.#closeBtn.bind(this));
    this.addGame.addEventListener("closeModal", this.#closeBtn.bind(this));

    // esc button closes modal
    document.addEventListener("keydown", (e) => {
      let host = document.querySelector("custom-modal");

      if (e.key == "Escape") {
        if (host.hasAttribute("close")) {
          host.removeAttribute("close");
        } else {
          host.setAttribute("close", "");
        }
      }
    });
  }
}

window.customElements.define(`custom-modal`, customModal);
