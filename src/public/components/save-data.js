/* WEB components boiler*/
class SaveData extends customModal {
  constructor() {
    super();
  }

  // elems
  pathDiv;
  filePathTxt;
  clearPathBtn;
  styledFileBtn;
  hiddenFileInput;
  saveJsonBtn;

  connectedCallback() {
    this.#render();
  }

  #styles = `
      <style>    
        :host([open]){
            display: flex;
        }

        ${this.commonStyles}

        .pathDiv{
            display: flex;
            align-items: center;
            margin: 0 auto;
        }
        
        .filePathTxt{
            background-color: #cdd2d7;
            border: none;
            padding: 8px;
        }

        .clearPathBtn{
            border-radius: 5px;
            padding: 8px;
        }
      </style>
  `;

  #closeModal() {
    const closeModal = new Event("closeModal");
    this.dispatchEvent(closeModal);
  }

  #clearPath(e) {
    e.preventDefault();
    this.filePathTxt.value = "";
  }

  #chooseFolder(e) {
    e.preventDefault();
    this.pathDiv.classList.remove("error");
    this.hiddenFileInput.click();
  }

  #changeFolder(e) {
    if (e.target.files.length > 0) {
      let ogPath = e.target.files[0].path;
      let folderPath = ogPath.substring(0, ogPath.lastIndexOf("\\") + 1);
      this.filePathTxt.value = `${folderPath}`;
    }
  }

  async #saveData(e) {
    e.preventDefault();

    if (this.filePathTxt.value.length > 0) {
      let path = encodeURI(this.filePathTxt.value);
      await fetch(`/saveData/${path}`);
      this.#closeModal();
    } else {
      this.pathDiv.classList.add("error");
    }
  }

  attributeChangedCallback(prop, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (prop === "open") {
      this.filePathTxt.value = "";
      this.pathDiv.classList.remove("error");
    }
  }

  static get observedAttributes() {
    return ["open"];
  }

  #render() {
    this._shadow.innerHTML = `
       ${this.#styles}

       <form method="POST" action="">
            <h2 class="header">Backup Data</h2>
            <label for="filePathTxt"> Folder Location </label>
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
            <button id="styledFileBtn" class="blueBtn">Folder Location</button>
            <input
                id="hiddenFileInput"
                class="hide"
                type="file"
                webkitdirectory="true"
                directory
            />
            <button id="saveJsonBtn" class="greenBtn" type="submit">Save</button>
        </form>
    `;

    // shadowRoot elements init
    this.pathDiv = this.shadowRoot.getElementById("pathDiv");
    this.filePathTxt = this.shadowRoot.getElementById("filePathTxt");
    this.clearPathBtn = this.shadowRoot.getElementById("clearPathBtn");
    this.styledFileBtn = this.shadowRoot.getElementById("styledFileBtn");
    this.hiddenFileInput = this.shadowRoot.getElementById("hiddenFileInput");
    this.saveJsonBtn = this.shadowRoot.getElementById("saveJsonBtn");

    // event listeners
    this.clearPathBtn.addEventListener("click", this.#clearPath.bind(this));
    this.styledFileBtn.addEventListener("click", this.#chooseFolder.bind(this));
    this.hiddenFileInput.addEventListener(
      "change",
      this.#changeFolder.bind(this)
    );
    this.saveJsonBtn.addEventListener("click", this.#saveData.bind(this));
  }
}

window.customElements.define(`save-data`, SaveData);
