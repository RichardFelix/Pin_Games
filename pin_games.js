/************************
     Imports / Vars
************************/
const EXPRESS = require("express");
const APP = EXPRESS();
const FS = require("fs");
const PATH = require("path");
const MUTLER = require("multer");
const PORT = process.env.PORT || 3569;
const AXIOS = require("axios");
const BODY_PARSER = require("body-parser");
const CATEGORY = ["installed", "play_later", "wishlist"];
const PLATFORMS = [
  "Steam",
  "Origin",
  "Epic",
  "Battle.net",
  "Xbox",
  "Uplay",
  "GoG",
  "Custom Launcher",
];
const { app, shell } = require("electron");
const USERDATA = app.getPath("userData");
let data = {};
let steamIds = {};

/*********************************
     Read or Create Data File
*********************************/
try {
  updateSteamIds();

  data = JSON.parse(
    FS.readFileSync(PATH.join(USERDATA + `/data.json`), "utf-8")
  );
  console.log("data.json read from file");
} catch (error) {
  FS.writeFileSync(
    PATH.join(USERDATA + `/data.json`),
    `${JSON.stringify({ items: [] })}`
  );
  data = { items: [] };
  console.log("data.json Created");
}

/************************
     Express Config
************************/
APP.set("view engine", "pug");
APP.set("views", PATH.join(__dirname + "/src/views"));
APP.use(EXPRESS.static(PATH.join(__dirname + "/src/public")));
APP.use(EXPRESS.static(USERDATA));
APP.use(BODY_PARSER.urlencoded({ extended: true }));
APP.use(BODY_PARSER.json());

/******************************
    Write JSON to Data Folder
******************************/
function writeDataToFile() {
  FS.writeFileSync(
    PATH.join(USERDATA + `/data.json`),
    `${JSON.stringify(data)}`
  );
}

/************************
     Mutler Config
************************/
let storage = MUTLER.diskStorage({
  destination: function (req, file, cb) {
    cb(null, USERDATA);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

let upload = MUTLER({ storage: storage });

/****************************
     Steam Logo Functions
****************************/
async function updateSteamIds() {
  steamIds = await getSteamData();
  console.log(`steamIds list retrieved`);
}

function getSteamData() {
  return AXIOS({
    method: "get",
    url: `https://api.steampowered.com/ISteamApps/GetAppList/v0002/?format=json`,
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(`Get Steam Data Failed - ${err}`);
      return "NOTHING";
    });
}

function getSteamIDByName(name) {
  return new Promise((resolve, reject) => {
    let games = steamIds.applist.apps.filter(
      (item) => item.name.toLowerCase().match(name) !== null
    );

    let gamesCopy = [];
    let copyLoopLength = games.length > 10 ? 10 : games.length;

    for (let x = 0; x < copyLoopLength; x++) {
      gamesCopy.push(games[x]);
    }

    resolve(gamesCopy);
  }).catch((err) => {
    console.log(`Get Steam Id By Name Failed - ${err}`);
  });
}

function getLogoFromSteam(id) {
  return AXIOS({
    method: "get",
    url: `https://store.steampowered.com/api/appdetails?appids=${id}`,
  })
    .then((response) => {
      return response.data[`${id}`].data.header_image;
    })
    .catch((err) => {
      console.log(`Get Logo Failed - ${err}`);
      return "NOTHING";
    });
}

function downloadSteamImage(gameLogoURL, name) {
  return AXIOS({
    method: "get",
    responseType: "stream",
    url: gameLogoURL,
  })
    .then((response) => {
      response.data
        .pipe(FS.createWriteStream(`${USERDATA}\\${name}.jpg`))
        .on("error", (error) => reject(error))
        .once("close", () => `${USERDATA}\\${name}.jpg`);
    })
    .catch((err) => {
      console.log(`Downloading Image Failed - ${err}`);
    });
}

async function findSteamLogos(name) {
  let gameIds = await getSteamIDByName(name.toLowerCase());

  if (typeof gameIds === "undefined") {
    return [];
  }

  let gameLogosURLArr = [];
  let gameLogoURL = "";

  for (let x = 0; x < gameIds.length; x++) {
    gameLogoURL = await getLogoFromSteam(gameIds[x].appid);
    if (gameLogoURL !== "NOTHING") gameLogosURLArr.push(gameLogoURL);
  }

  console.log(`${gameLogosURLArr} - gamesLogosURLArr`);

  return gameLogosURLArr;
}

/************************
        Routes
************************/
require("./routes")(
  APP,
  upload,
  PLATFORMS,
  CATEGORY,
  data,
  writeDataToFile,
  findSteamLogos,
  downloadSteamImage,
  shell
);

/************************
       APP Start
************************/
APP.listen(PORT, () => console.log(`App Running on port: ${PORT}!`));
