import { CustomModal } from "./custom-modal";
import styles from "../css/edit-game.css";

export class EditGame extends CustomModal {
  constructor() {
    super();
  }

  // elems
  nameTxt;
  platformsSelectBx;
  categorySelectBx;
  filePathTxt;
  clearPathBtn;
  styledFileBtn;
  hiddenFileInput;
  deleteBtn;
  updateBtn;
  currentGame;
  form;

  // custom-elements
  playGame;

  connectedCallback() {
    this.#render();
  }

  #closeModal() {
    const closeModal = new Event("closeModal");
    this.dispatchEvent(closeModal);
  }

  #clearPath(e) {
    e.preventDefault();
    this.filePathTxt.value = "";
  }

  #chooseFile(e) {
    e.preventDefault();
    this.hiddenFileInput.click();
  }

  #changeFile(e) {
    if (e.target.files.length > 0) {
      this.filePathTxt.value = `${e.target.files[0].path}`;
    }
  }

  async #updateGame(e) {
    if (this.nameTxt.value.length > 0) {
      e.preventDefault();

      const postData = {
        name: this.nameTxt.value,
        platform: this.platformsSelectBx.value,
        category: this.categorySelectBx.value,
        path: this.filePathTxt.value,
      };

      await fetch(`/${this.currentGame._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }).then(() => {
        this.currentGame = "";
        window.location.href = "/";
      });
    } else {
      this.nameTxt.classList.add("error");
      this.nameTxt.focus();
    }
  }

  async #deleteGame(e) {
    e.preventDefault();

    const postData = {
      name: this.nameTxt.value,
      category: this.categorySelectBx.value,
    };

    await fetch(`/${this.currentGame._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    }).then(() => {
      this.currentGame = "";
      window.location.href = "/";
    });
  }

  #showData(name) {
    this.currentGame = this.data.filter((item) => {
      return item.name.toLowerCase() === name.toLowerCase();
    });

    this.currentGame = this.currentGame[0];

    this.categorySelectBx.value = this.currentGame.category;
    this.nameTxt.value = this.currentGame.name;
    this.platformsSelectBx.value = this.currentGame.platform;
    this.filePathTxt.value = ``;

    if (this.currentGame.path !== undefined && this.currentGame.path !== "") {
      this.filePathTxt.value = this.currentGame.path;
      this.playGame.setAttribute("open", "");
      this.playGame.setAttribute("name", `${this.currentGame.name}`);
      this.playGame.setAttribute("filePath", `${this.filePathTxt.value}`);
      this.form.classList.add("hide");
    }
  }

  #clearPlayGameAttributes() {
    this.form.classList.remove("hide");
    this.playGame.removeAttribute("name");
    this.playGame.removeAttribute("open");
    this.playGame.removeAttribute("filePath");
  }

  #hidePlayGame() {
    this.#clearPlayGameAttributes();
  }

  attributeChangedCallback(prop, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (prop === "open") {
      this.#clearPlayGameAttributes();
      this.nameTxt.classList.remove("error");
      this.nameTxt.focus();
    }

    if (prop === "name" && newValue !== null) {
      this.#showData(newValue);
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
  
        <play-game></play-game>         
        <form method="POST" action="">
           <h2 class="header">Edit Game</h2>
           <label for="nameTxt"> Name </label>
           <input id="nameTxt" class="nameTxt" type="text" name="name" required/>
           <label for="platformsSelectBx"> Platform </label>
           <select id="platformsSelectBx" name="platform" required></select>
           <label for="categorySelectBx"> Category </label>
           <select id="categorySelectBx" name="category" required></select>
           <label for="filePathTxt" class="filePathLbl"> App Location </label>
           <div id="pathDiv" class="pathDiv">
             <input
               id="filePathTxt"
               class="filePathTxt"
               type="text"
               name="path"
               readonly="readonly"
             />
             <button id="clearPathBtn" class="blueBtn clearPathBtn">Clear</button>
           </div>
           <button id="styledFileBtn" class="blueBtn">App Location</button>
           <input
             id="hiddenFileInput"
             class="hide"
             type="file"
           />
           <div id="submitBtns" class="submitBtns">
             <button id="deleteBtn" class="redBtn deleteBtn" type="submit">
               Delete
             </button>
             <button id="updateBtn" class="greenBtn updateBtn" type="submit">
               Update
             </button>
           </div>
         </form>
      `;

    // shadowRoot elements init
    this.nameTxt = this.shadowRoot.getElementById("nameTxt");
    this.platformsSelectBx =
      this.shadowRoot.getElementById("platformsSelectBx");
    this.categorySelectBx = this.shadowRoot.getElementById("categorySelectBx");
    this.filePathTxt = this.shadowRoot.getElementById("filePathTxt");
    this.clearPathBtn = this.shadowRoot.getElementById("clearPathBtn");
    this.styledFileBtn = this.shadowRoot.getElementById("styledFileBtn");
    this.hiddenFileInput = this.shadowRoot.getElementById("hiddenFileInput");
    this.deleteBtn = this.shadowRoot.getElementById("deleteBtn");
    this.updateBtn = this.shadowRoot.getElementById("updateBtn");
    this.playGame = this.shadowRoot.querySelector("play-game");
    this.form = this.shadowRoot.querySelector("form");

    // add options to platform and category select
    this.category.forEach((item) => {
      this.categorySelectBx.innerHTML += `<option value="${item}"> ${item}</option>`;
    });

    this.platforms.forEach((item) => {
      this.platformsSelectBx.innerHTML += `<option value="${item}"> ${item}</option>`;
    });

    // event listeners
    this.updateBtn.onclick = (e) => this.#updateGame(e);
    this.deleteBtn.onclick = (e) => this.#deleteGame(e);
    this.clearPathBtn.onclick = (e) => this.#clearPath(e);
    this.styledFileBtn.onclick = (e) => this.#chooseFile(e);
    this.hiddenFileInput.onchange = (e) => this.#changeFile(e);
    this.nameTxt.onkeydown = () => {
      this.nameTxt.classList.remove("error");
    };

    // custom event listeners
    this.playGame.addEventListener("showEditForm", () => this.#hidePlayGame());
    this.playGame.addEventListener("closeModal", () => this.#closeModal());
  }
}

//   window.customElements.define(`edit-game`, EditGame);
