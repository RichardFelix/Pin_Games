import { CustomModal } from "./custom-modal";
import styles from "../css/add-game.css";

export class AddGame extends CustomModal {
  constructor() {
    super();
  }

  //vars
  searchLogoArr = [];
  searchLogoCounter = 0;

  // elems
  loadingSVG = `<svg width="300" height="120" id="clackers" class="clackers hide">
    <!-- Left arc path -->
    <svg>
      <path id="arc-left-up" fill="none" d="M 90 90 A 90 90 0 0 1 0 0"/>
    </svg>
    <!-- Right arc path -->
    <svg>
      <path id="arc-right-up" fill="none" d="M 100 90 A 90 90 0 0 0 190 0"/>
    </svg>
    
    <text x="150" y="50" fill="#ffffff" font-family="Helvetica Neue,Helvetica,Arial" font-size="18"
          text-anchor="middle">
      L O A D I N G
    </text>
    <circle cx="15" cy="15" r="15">
      <animateMotion dur="1.5s" repeatCount="indefinite"
        calcMode="linear"
        keyPoints="0.0;0.19;0.36;0.51;0.64;0.75;0.84;0.91;0.96;0.99;1.0;0.99;0.96;0.91;0.84;0.75;0.64;0.51;0.36;0.19;0.0;0.0;0.05;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0"
        keyTimes="0.0;0.025;0.05;0.075;0.1;0.125;0.15;0.175;0.2;0.225;0.25;0.275;0.3;0.325;0.35;0.375;0.4;0.425;0.45;0.475;0.5;0.525;0.55;0.575;0.6;0.625;0.65;0.675;0.7;0.725;0.75;0.775;0.8;0.825;0.85;0.875;0.9;0.925;0.95;0.975;1.0">
        <mpath xlink:href="#arc-left-up"/>
      </animateMotion>
    </circle>
    <circle cx="135" cy="105" r="15" />
    <circle cx="165" cy="105" r="15" />
    <circle cx="95" cy="15" r="15">
      <animateMotion dur="1.5s" repeatCount="indefinite"
        calcMode="linear"
        keyPoints="0.0;0.0;0.05;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.0;0.19;0.36;0.51;0.64;0.75;0.84;0.91;0.96;0.99;1.0;0.99;0.96;0.91;0.84;0.75;0.64;0.51;0.36;0.19;0.0"
        keyTimes="0.0;0.025;0.05;0.075;0.1;0.125;0.15;0.175;0.2;0.225;0.25;0.275;0.3;0.325;0.35;0.375;0.4;0.425;0.45;0.475;0.5;0.525;0.55;0.575;0.6;0.625;0.65;0.675;0.7;0.725;0.75;0.775;0.8;0.825;0.85;0.875;0.9;0.925;0.95;0.975;1.0">
        <mpath xlink:href="#arc-right-up"/>
      </animateMotion>
    </circle>
    </svg>
    `;

  connectedCallback() {
    this.#render();
  }

  // app location functions
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

  // search logo functions
  #resetLogoDiv() {
    this.coverTxt.classList.add("hide");
    this.noLogoResults.classList.add("hide");
    this.logoSearchImgSolo.classList.add("hide");
    this.coverArtImagesDiv.classList.add("hide");
    this.loadingSVG.classList.add("hide");
    this.coverArtImagesDiv.classList.remove("displayFlex");
  }

  async #searchForLogos(e) {
    e.preventDefault();
    this.logoDiv.classList.remove("error");
    this.searchLogoCounter = 0;
    this.searchLogoArr = [];
    let name = this.nameTxt.value;

    if (name.length > 0) {
      this.#resetLogoDiv();
      this.loadingSVG.classList.remove("hide");

      await fetch(`/getLogos/${name}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length !== 0) {
            this.searchLogoArr = data;
            this.#changeLogo();
          } else {
            this.#resetLogoDiv();
            this.noLogoResults.classList.remove("hide");
            this.noLogoResults.innerHTML = "No Results";
            this.searchLogoArr = [];
          }

          this.loadingSVG.classList.add("hide");
        });
    } else {
      this.loadingSVG.classList.add("hide");
      this.nameTxt.classList.add("error");
      this.nameTxt.focus();
    }
  }

  #changeLogo() {
    if (this.searchLogoArr.length === 1) {
      this.logoSearchImgSolo.classList.remove("hide");
      this.logoSearchImgSolo.attributes.src.value = this.searchLogoArr[0];
    } else {
      this.coverArtImagesDiv.classList.remove("hide");
      this.coverArtImagesDiv.classList.add("displayFlex");
      this.logoSearchImgs.attributes.src.value = this.searchLogoArr[0];
    }
  }

  #uploadCover(e) {
    e.preventDefault();
    this.logoDiv.classList.remove("error");
    this.hiddenUploadCoverInput.click();
  }

  #showCoverTxt(e) {
    this.#resetLogoDiv();
    this.searchLogoArr = [];

    if (e.target.files.length > 0) {
      this.coverTxt.classList.remove("hide");
      this.coverTxt.innerHTML = `${e.target.files[0].path}`;
    }
  }

  // Save Button
  #saveBtnClick(e) {
    if (this.nameTxt.value.length > 0) {
      if (this.hiddenUploadCoverInput.value.length > 0) {
        this.form.submit();
      } else if (this.searchLogoArr.length > 0) {
        e.preventDefault();
        this.#uploadGame();
      } else {
        e.preventDefault();
        this.logoDiv.classList.add("error");
        this.nameTxt.focus();
      }
    } else {
      this.nameTxt.classList.add("error");
      this.nameTxt.focus();
    }
  }

  async #uploadGame() {
    let coverArtImg =
      this.searchLogoArr.length > 1
        ? this.logoSearchImgs
        : this.logoSearchImgSolo;

    const postData = {
      name: this.nameTxt.value,
      platform: this.platformsSelectBx.value,
      category: this.categorySelectBx.value,
      url: coverArtImg.attributes.src.value,
      path: this.filePathTxt.value,
    };

    await fetch(`/downloadLogo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    }).then(() => {
      window.location.href = "/";
    });
  }

  attributeChangedCallback(prop, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (prop === "open") {
      this.#resetLogoDiv();
      this.noLogoResults.classList.remove("hide");
      this.noLogoResults.innerHTML = "OR";
      this.nameTxt.classList.remove("error");
      this.nameTxt.value = "";
      this.nameTxt.focus();
      this.logoDiv.classList.remove("error");
      this.searchLogoArr = [];
      this.searchLogoCounter = 0;
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

  
          <form method="POST" action="/uploadGame" enctype="multipart/form-data">
          <h2 class="header">Add New Game</h2>
          <label for="nameTxt"> Name </label>
          <input id="nameTxt" class="nameTxt" type="text" name="name" required/>
          <label for="platformsSelectBx"> Platform </label>
          <select id="platformsSelectBx" class="platformsSelectBx" name="platform" required></select>
          <label for="categorySelectBx"> Category </label>
          <select id="categorySelectBx" class="categorySelectBx" name="category" required></select>
          <div id="logoDiv" class="logoDiv">
              <button id="searchForCoverBtn" class="blueBtn">Search for Cover</button>
              <div id="coverDiv" class="coverDiv">
                ${this.loadingSVG}
                <h3 id="coverTxt" class="coverTxt hide"></h3>
                <h3 id="noLogoResults" class="noLogoResults">OR</h3>
                <img
                    id="logoSearchImgSolo"
                    class="logoSearchImgs hide" src="" alt=""
                />
                <div id="coverArtImagesDiv" class="logoSearchImages hide">
                  <button id="leftArrowBtn" class="leftArrowBtn">
                    <img
                      id="leftArrowBtnImg"
                      class="leftArrowBtnImg"
                      src="img/arrow.png"
                      alt="Go to Previous Cover Image"
                    />
                  </button>
                  <img id="logoSearchImgs" class="logoSearchImgs" src="" alt="" />
                  <button id="rightArrowBtn" class="rightArrowBtn">
                    <img
                      id="rightArrowBtnImg"
                      class="rightArrowBtnImg"
                      src="img/arrow.png"
                      alt="Go to Next Cover Image"
                    />
                  </button>   
                </div>
              </div>
              <button id="styledUploadCoverBtn" class="blueBtn">Upload Cover</button>
              <input 
                id="hiddenUploadCoverInput" 
                class="hide" 
                type="file" 
                name="newGameImage"
              />
          </div>        
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
          <button id="saveBtn" class="greenBtn"> Save </button>
        </form>
      `;

    // shadowRoot elements init
    this.form = this.shadowRoot.querySelector("form");
    this.nameTxt = this.shadowRoot.getElementById("nameTxt");
    this.platformsSelectBx =
      this.shadowRoot.getElementById("platformsSelectBx");
    this.categorySelectBx = this.shadowRoot.getElementById("categorySelectBx");
    this.logoDiv = this.shadowRoot.getElementById("logoDiv");
    this.searchForCoverBtn =
      this.shadowRoot.getElementById("searchForCoverBtn");
    this.coverDiv = this.shadowRoot.getElementById("coverDiv");
    this.styledUploadCoverBtn = this.shadowRoot.getElementById(
      "styledUploadCoverBtn"
    );
    this.hiddenUploadCoverInput = this.shadowRoot.getElementById(
      "hiddenUploadCoverInput"
    );
    this.filePathTxt = this.shadowRoot.getElementById("filePathTxt");
    this.clearPathBtn = this.shadowRoot.getElementById("clearPathBtn");
    this.styledFileBtn = this.shadowRoot.getElementById("styledFileBtn");
    this.hiddenFileInput = this.shadowRoot.getElementById("hiddenFileInput");
    this.saveBtn = this.shadowRoot.getElementById("saveBtn");
    this.leftArrowBtn = this.shadowRoot.getElementById("leftArrowBtn");
    this.rightArrowBtn = this.shadowRoot.getElementById("rightArrowBtn");
    this.noLogoResults = this.shadowRoot.getElementById("noLogoResults");
    this.logoSearchImgSolo =
      this.shadowRoot.getElementById("logoSearchImgSolo");
    this.logoSearchImgs = this.shadowRoot.getElementById("logoSearchImgs");
    this.coverArtImagesDiv =
      this.shadowRoot.getElementById("coverArtImagesDiv");
    this.loadingSVG = this.shadowRoot.getElementById("clackers");
    this.showCoverTxt = this.shadowRoot.getElementById("showCoverTxt");
    this.coverTxt = this.shadowRoot.getElementById("coverTxt");

    // add options to platform and category select
    this.category.forEach((item) => {
      this.categorySelectBx.innerHTML += `<option value="${item}"> ${item}</option>`;
    });

    this.platforms.forEach((item) => {
      this.platformsSelectBx.innerHTML += `<option value="${item}"> ${item}</option>`;
    });

    // event listeners
    this.nameTxt.onkeydown = () => {
      this.nameTxt.classList.remove("error");
    };

    // app path event listerners
    this.clearPathBtn.onclick = (e) => this.#clearPath(e);
    this.styledFileBtn.onclick = (e) => this.#chooseFile(e);
    this.hiddenFileInput.onchange = (e) => this.#changeFile(e);

    // logo event lisenters
    this.searchForCoverBtn.onclick = (e) => this.#searchForLogos(e);
    this.styledUploadCoverBtn.onclick = (e) => this.#uploadCover(e);
    this.hiddenUploadCoverInput.onchange = (e) => this.#showCoverTxt(e);

    this.leftArrowBtn.addEventListener("click", (e) => {
      e.preventDefault();

      this.searchLogoCounter !== 0
        ? this.searchLogoCounter--
        : (this.searchLogoCounter = this.searchLogoArr.length - 1);
      this.logoSearchImgs.attributes.src.value =
        this.searchLogoArr[this.searchLogoCounter];
    });

    this.rightArrowBtn.addEventListener("click", (e) => {
      e.preventDefault();

      this.searchLogoArr.length - 1 === this.searchLogoCounter
        ? (this.searchLogoCounter = 0)
        : this.searchLogoCounter++;
      this.logoSearchImgs.attributes.src.value =
        this.searchLogoArr[this.searchLogoCounter];
    });

    // save button
    this.saveBtn.onclick = (e) => this.#saveBtnClick(e);
  }
}

// window.customElements.define(`add-game`, AddGame);
