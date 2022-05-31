//////////////////////////////////////////
//          Constants
//////////////////////////////////////////
const CONSTANTS_ENUM = Object.freeze({
  BLACK_OVERLAY: document.getElementById("blackOverlay"),
  UPLOAD_MODAL_NEWGAME: document.getElementById("uploadModalNewGame"),
  NAME_TXT: document.getElementById("uploadModalNewGame_inputs_nameTxt"),
  PLATFORM_SELECTBX: document.getElementById(
    "uploadModalNewGame_inputs_platformSelectBx"
  ),
  CATEGORY_SELCECTBX: document.getElementById(
    "uploadModalNewGame_inputs_categorySelectBx"
  ),
  UPLOAD_BTN: document.getElementById("uploadBtn"),
  EDIT_BTN: document.getElementById("uploadModalNewGame_inputs_editBtns"),
  HEADER: document.getElementById("uploadModalNewGame_inputs_header"),
  COVER_ART_DIV: document.getElementById(
    "uploadModalNewGame_inputs_chooseCoverArt"
  ),
  LOGO_SEARCH_BTN: document.getElementById(
    "uploadModalNewGame_inputs_logosSearchBtn"
  ),
  COVER_ART: document.getElementById("uploadModalNewGame_inputs_logos"),
  FILE_BTN: document.getElementById("uploadModalNewGame_inputs_fileBtn"),
  ADD_BTN: document.getElementById("addNewGame"),
  CLOSE_BTN: document.getElementById("uploadModalNewGame_inputs__closeBtn"),
  STYLED_FILE_BTN: document.getElementById(
    "uploadModalNewGame_inputs_styledFileBtn"
  ),
  STYLED_APP_BTN: document.getElementById(
    "uploadModalNewGame_inputs_styledAppPathBtn"
  ),
  APP_FILE_BTN: document.getElementById(
    "uploadModalNewGame_inputs_appPath_fileBtn"
  ),
  APP_NAME_TXT: document.getElementById(
    "uploadModalNewGame_inputs_appPath_nameTxt"
  ),
  UPDATE_BTN: document.getElementById(
    "uploadModalNewGame_inputs_editBtns_updateBtn"
  ),
  DELETE_BTN: document.getElementById(
    "uploadModalNewGame_inputs_editBtns_deleteBtn"
  ),
  COVER_ART_IMGS: document.getElementsByClassName("logoSearchImg"),
  FORM: document.getElementById("uploadModalNewGame_form"),
  PLAY_OR_EDIT_HEADER: document.getElementById(
    "uploadModalNewGame_playOrEdit_header"
  ),
  LOADING_SVG_PATH: `<svg width="300" height="120" id="clackers" class="clackers">
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
</svg>`,
  PLAY_BTN: document.getElementById("uploadModalNewGame_playOrEdit_play"),
  SHOW_EDIT_BTN: document.getElementById("uploadModalNewGame_playOrEdit_edit"),
  PLAY_SVG_PATH: `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve">
<circle style="fill:#EBBA16;" cx="29" cy="29" r="29"/>
<g>
	<polygon style="fill:#FFFFFF;" points="44,29 22,44 22,29.273 22,14  "/>
	<path style="fill:#FFFFFF;" d="M22,45c-0.16,0-0.321-0.038-0.467-0.116C21.205,44.711,21,44.371,21,44V14   c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C44.836,28.36,45,28.669,45,29s-0.164,0.64-0.437,0.826   l-22,15C22.394,44.941,22.197,45,22,45z M23,15.893v26.215L42.225,29L23,15.893z"/>
</g>
<style xmlns="" data-source="base" class="dblt-ykjmwcnxmi"/><style xmlns="" data-source="stylesheet-processor" class="dblt-ykjmwcnxmi"/></svg>`,
});

//////////////////////////////////////////
//         Global Vars
//////////////////////////////////////////
let searchLogoArr = [];
let searchLogoCounter = 0;
let updateItemName = "";

//////////////////////////////////////////
//          Functions
//////////////////////////////////////////

// open modal
function openModal() {
  CONSTANTS_ENUM.UPLOAD_MODAL_NEWGAME.classList.add("addGame");
  CONSTANTS_ENUM.UPLOAD_MODAL_NEWGAME.classList.remove("editGame");
  CONSTANTS_ENUM.UPLOAD_MODAL_NEWGAME.classList.remove("playOrEdit");
  CONSTANTS_ENUM.COVER_ART_DIV.classList.remove("error");
  CONSTANTS_ENUM.NAME_TXT.classList.remove("error");
  CONSTANTS_ENUM.BLACK_OVERLAY.classList.remove("hide");
  CONSTANTS_ENUM.HEADER.innerText = "Add New Game";
  CONSTANTS_ENUM.COVER_ART.innerHTML = `<h3 id="noLogoResults" class="noLogoResults">OR</h3></div>`;
  CONSTANTS_ENUM.FILE_BTN.value = "";
  CONSTANTS_ENUM.NAME_TXT.value = "";
  CONSTANTS_ENUM.PLATFORM_SELECTBX.selectedIndex = 0;
  CONSTANTS_ENUM.CATEGORY_SELCECTBX.selectedIndex = 0;
  CONSTANTS_ENUM.NAME_TXT.focus();
  CONSTANTS_ENUM.ADD_BTN.setAttribute("tabindex", "-1");
  CONSTANTS_ENUM.APP_NAME_TXT.value = ``;
  searchLogoArr = [];
}

// click installed game to edit
async function openEditModal(name) {
  CONSTANTS_ENUM.UPLOAD_MODAL_NEWGAME.classList.add("editGame");
  CONSTANTS_ENUM.UPLOAD_MODAL_NEWGAME.classList.remove("addGame");
  CONSTANTS_ENUM.UPLOAD_MODAL_NEWGAME.classList.remove("playOrEdit");
  CONSTANTS_ENUM.NAME_TXT.classList.remove("error");
  CONSTANTS_ENUM.BLACK_OVERLAY.classList.remove("hide");
  CONSTANTS_ENUM.HEADER.innerText = "Edit Game";
  CONSTANTS_ENUM.NAME_TXT.focus();
  CONSTANTS_ENUM.ADD_BTN.setAttribute("tabindex", "-1");

  updateItemName = name;

  await fetch(`/${name}`)
    .then((response) => response.json())
    .then((json) => (updateItemName = json));

  CONSTANTS_ENUM.CATEGORY_SELCECTBX.value = updateItemName.category;
  CONSTANTS_ENUM.NAME_TXT.value = updateItemName.name;
  CONSTANTS_ENUM.PLATFORM_SELECTBX.value = updateItemName.platform;
  CONSTANTS_ENUM.APP_NAME_TXT.value = ``;

  if (updateItemName.path !== undefined && updateItemName.path !== "") {
    CONSTANTS_ENUM.UPLOAD_MODAL_NEWGAME.classList.add("playOrEdit");
    CONSTANTS_ENUM.APP_NAME_TXT.value = updateItemName.path;
    CONSTANTS_ENUM.PLAY_OR_EDIT_HEADER.innerText = `${updateItemName.name}`;
  }
}

async function updateGame() {
  const postData = {
    name: CONSTANTS_ENUM.NAME_TXT.value,
    platform: CONSTANTS_ENUM.PLATFORM_SELECTBX.value,
    category: CONSTANTS_ENUM.CATEGORY_SELCECTBX.value,
    path: CONSTANTS_ENUM.APP_NAME_TXT.value,
  };

  await fetch(`/${updateItemName.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  }).then(() => {
    updateItemName = "";
    window.location.href = "/";
  });
}

async function deleteGame() {
  const postData = {
    name: CONSTANTS_ENUM.NAME_TXT.value,
    category: CONSTANTS_ENUM.CATEGORY_SELCECTBX.value,
  };

  await fetch(`/${updateItemName.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  }).then(() => {
    updateItemName = "";
    window.location.href = "/";
  });
}

// update btn click
async function uploadGame() {
  const postData = {
    name: CONSTANTS_ENUM.NAME_TXT.value,
    platform: CONSTANTS_ENUM.PLATFORM_SELECTBX.value,
    category: CONSTANTS_ENUM.CATEGORY_SELCECTBX.value,
    url: CONSTANTS_ENUM.COVER_ART_IMGS[0].attributes.src.value,
    path: CONSTANTS_ENUM.APP_NAME_TXT.value,
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

// search logo btn click helper
function changeLogo() {
  let id = CONSTANTS_ENUM.NAME_TXT.value;

  if (searchLogoArr.length === 1) {
    CONSTANTS_ENUM.COVER_ART.innerHTML = `
     <img class="installedGame_image src logoSearchImg" id="logoSearchImg" src="${searchLogoArr[searchLogoCounter]}" alt="${id}"></img>  
     `;
  } else {
    CONSTANTS_ENUM.COVER_ART.innerHTML = `<button class="leftLogoArrowBtn" id="uploadModalNewGame_inputs__leftLogoArrowBtn">
       <img class="uploadModalNewGame_inputs__closeBtn__img" id="uploadModalNewGame_inputs__leftLogoArrowBtn__img" src="img/arrow.png" alt="Go to Previous Cover Image"></button>
       <img class="installedGame_image src logoSearchImg" id="logoSearchImg" src="${searchLogoArr[searchLogoCounter]}" alt="${id}"></img>  
       <button class="rightLogoArrowBtn" id="uploadModalNewGame_inputs__rightLogoArrowBtn"> <img class="uploadModalNewGame_inputs__closeBtn__img" id="uploadModalNewGame_inputs__leftLogoArrowBtn__img" src="img/arrow.png" alt="Go to Next Cover Image"></button>
       `;

    // click Logo next btn
    document
      .getElementById("uploadModalNewGame_inputs__leftLogoArrowBtn")
      .addEventListener("click", (e) => {
        e.preventDefault();
        searchLogoCounter !== 0
          ? searchLogoCounter--
          : (searchLogoCounter = searchLogoArr.length - 1);
        CONSTANTS_ENUM.COVER_ART_IMGS[0].attributes.src.value =
          searchLogoArr[searchLogoCounter];
      });

    // click Logo previous btn
    document
      .getElementById("uploadModalNewGame_inputs__rightLogoArrowBtn")
      .addEventListener("click", (e) => {
        e.preventDefault();
        searchLogoArr.length - 1 === searchLogoCounter
          ? (searchLogoCounter = 0)
          : searchLogoCounter++;
        CONSTANTS_ENUM.COVER_ART_IMGS[0].attributes.src.value =
          searchLogoArr[searchLogoCounter];
      });
  }
}

async function searchForLogos() {
  let name = CONSTANTS_ENUM.NAME_TXT.value;
  searchLogoCounter = 0;

  if (name.length > 0) {
    CONSTANTS_ENUM.COVER_ART.innerHTML = CONSTANTS_ENUM.LOADING_SVG_PATH;

    await fetch(`/getLogos/${name}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length !== 0) {
          searchLogoArr = data;
          changeLogo();
        } else {
          CONSTANTS_ENUM.COVER_ART.innerHTML = `<h3 id="noLogoResults" class="noLogoResults">NO Results</h3></div>`;
          searchLogoArr = [];
        }
      });
  } else {
    CONSTANTS_ENUM.NAME_TXT.classList.add("error");
    CONSTANTS_ENUM.NAME_TXT.focus();
  }
}

//////////////////////////////////////////
//          Event Listeners
//////////////////////////////////////////
// upload new game
CONSTANTS_ENUM.ADD_BTN.addEventListener("click", () => {
  openModal();
});

// upload close btn
CONSTANTS_ENUM.CLOSE_BTN.addEventListener("click", () => {
  CONSTANTS_ENUM.BLACK_OVERLAY.classList.add("hide");
  CONSTANTS_ENUM.UPLOAD_MODAL_NEWGAME.classList.remove("addGame");
  CONSTANTS_ENUM.UPLOAD_MODAL_NEWGAME.classList.remove("editGame");
  CONSTANTS_ENUM.ADD_BTN.setAttribute("tabindex", "0");
});

// esc button closes modal
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    CONSTANTS_ENUM.CLOSE_BTN.click();
  }
});

// click on black overlay closes modal
CONSTANTS_ENUM.BLACK_OVERLAY.addEventListener("click", () => {
  CONSTANTS_ENUM.CLOSE_BTN.click();
});

// styled file button click btn
CONSTANTS_ENUM.STYLED_APP_BTN.addEventListener("click", (e) => {
  e.preventDefault();
  CONSTANTS_ENUM.APP_FILE_BTN.click();
});

CONSTANTS_ENUM.APP_FILE_BTN.addEventListener("change", (e) => {
  console.log(encodeURI(e.target.files[0].path));
  CONSTANTS_ENUM.APP_NAME_TXT.value = `${e.target.files[0].path}`;
});

// styled file button click btn
CONSTANTS_ENUM.STYLED_FILE_BTN.addEventListener("click", (e) => {
  e.preventDefault();
  CONSTANTS_ENUM.FILE_BTN.click();
});

CONSTANTS_ENUM.FILE_BTN.addEventListener("change", (e) => {
  CONSTANTS_ENUM.COVER_ART.innerHTML = `<h3 id="noLogoResults" class="noLogoResults">${
    CONSTANTS_ENUM.FILE_BTN.value.split("\\")[2]
  }</h3></div>`;
});

// click file Btn
CONSTANTS_ENUM.FILE_BTN.addEventListener("click", () => {
  CONSTANTS_ENUM.COVER_ART_DIV.classList.remove("error");
});

// click Logo Search Btn
CONSTANTS_ENUM.LOGO_SEARCH_BTN.addEventListener("click", (e) => {
  e.preventDefault();
  CONSTANTS_ENUM.COVER_ART_DIV.classList.remove("error");
  searchForLogos();
});

// update btn click
CONSTANTS_ENUM.UPDATE_BTN.addEventListener("click", (e) => {
  e.preventDefault();
  if (CONSTANTS_ENUM.NAME_TXT.value.length > 0) {
    updateGame();
  } else {
    CONSTANTS_ENUM.NAME_TXT.classList.add("error");
    CONSTANTS_ENUM.NAME_TXT.focus();
  }
});

// delete btn click
CONSTANTS_ENUM.DELETE_BTN.addEventListener("click", (e) => {
  e.preventDefault();
  deleteGame();
});

// clear name text box error on focus
CONSTANTS_ENUM.NAME_TXT.addEventListener("keydown", () => {
  CONSTANTS_ENUM.NAME_TXT.classList.remove("error");
});

// click Logo Search Btn
CONSTANTS_ENUM.UPLOAD_BTN.addEventListener("click", (e) => {
  if (CONSTANTS_ENUM.NAME_TXT.value.length > 0) {
    if (CONSTANTS_ENUM.FILE_BTN.value.length > 0) {
      CONSTANTS_ENUM.FORM.submit();
    } else if (searchLogoArr.length > 0) {
      e.preventDefault();
      uploadGame();
    } else {
      e.preventDefault();
      CONSTANTS_ENUM.COVER_ART_DIV.classList.add("error");
      CONSTANTS_ENUM.NAME_TXT.focus();
    }
  } else {
    e.preventDefault();
    CONSTANTS_ENUM.NAME_TXT.classList.add("error");
    CONSTANTS_ENUM.NAME_TXT.focus();
  }
});

// click edit button when play / show edit button is clicked
CONSTANTS_ENUM.SHOW_EDIT_BTN.addEventListener("click", () => {
  CONSTANTS_ENUM.UPLOAD_MODAL_NEWGAME.classList.remove("playOrEdit");
  CONSTANTS_ENUM.UPLOAD_MODAL_NEWGAME.classList.add("editGame");
});

// click play button
CONSTANTS_ENUM.PLAY_BTN.addEventListener("click", async () => {
  let path = encodeURI(updateItemName.path);
  await fetch(`/openPath/${path}`);
  CONSTANTS_ENUM.CLOSE_BTN.click();
});

// add svg to play button
CONSTANTS_ENUM.PLAY_BTN.innerHTML = CONSTANTS_ENUM.PLAY_SVG_PATH;
