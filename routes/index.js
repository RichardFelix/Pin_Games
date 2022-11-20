module.exports = (
  APP,
  upload,
  PLATFORMS,
  CATEGORY,
  data,
  writeDataToFile,
  findSteamLogos,
  downloadSteamImage,
  shell,
  FS,
  PATH
) => {
  /****************************
        Sort by Name Function
  ****************************/
  function sortByNameAsc() {
    data.items = data.items.sort((a, b) => {
      let textA = a.name.toUpperCase();
      let textB = b.name.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  }

  /************************
            Default
  ************************/
  APP.get("/", (req, res) => {
    installedArr = [];
    playLaterArr = [];
    wishlistArr = [];
    sortByNameAsc();

    data.items.forEach((item) => {
      switch (item.category) {
        case CATEGORY[0]:
          installedArr.push(item);
          break;
        case CATEGORY[1]:
          playLaterArr.push(item);
          break;
        case CATEGORY[2]:
          wishlistArr.push(item);
          break;
        default:
          console.log(`Error - ${item.name} did not get pushed to array`);
          break;
      }
    });

    res.render("index", {
      installedArr: installedArr,
      playLaterArr: playLaterArr,
      wishlistArr: wishlistArr,
      PLATFORMS: PLATFORMS,
      CATEGORY: CATEGORY,
      dataJson: data.items,
    });
  });

  /************************
              Create
  ************************/
  APP.post("/uploadGame", upload.single("newGameImage"), (req, res, next) => {
    let filePath = `\\${req.file.originalname}`;

    let newData = {
      _id: Math.floor(Math.random() * 1000000),
      name: req.body.name,
      imageLocation: filePath,
      platform: req.body.platform,
      category: req.body.category,
      path: req.body.path,
    };

    data.items.push(newData);
    sortByNameAsc();
    writeDataToFile();
    console.log(`Data has been saved!!`);
    res.redirect("/");
  });

  /************************
              Read
  ************************/
  // APP.get("/:name", (req, res) => {
  //   let game = data.items.filter((item) => {
  //     return item.name === req.params.name;
  //   });

  //   if (game.length > 0) {
  //     console.log(`Got Data for ${req.params.name}!!`);
  //     res.send(game[0]);
  //   } else {
  //     console.log(`No item found for ${req.params.name}!!`);
  //   }
  // });

  /************************
            Update
  ************************/
  APP.put("/:id", (req, res) => {
    const newData = {
      _id: Math.floor(Math.random() * 1000000),
      name: req.body.name,
      platform: req.body.platform,
      category: req.body.category,
      path: req.body.path,
    };

    newData.imageLocation = data.items.filter((item) => {
      return item._id === parseInt(req.params.id);
    })[0].imageLocation;
    data.items = data.items.filter((item) => {
      return item._id !== parseInt(req.params.id);
    });
    data.items.push(newData);
    sortByNameAsc();
    writeDataToFile();
    console.log(`Data has been updated!!`);
    res.sendStatus(200);
  });

  /************************
             Delete
  ************************/
  APP.delete("/:id", (req, res) => {
    data.items = data.items.filter((item) => {
      return item._id !== parseInt(req.params.id);
    });
    sortByNameAsc();
    writeDataToFile();
    console.log("Successful deletion!!");
    res.sendStatus(200);
  });

  /************************
       Find Logos
  ************************/
  APP.get("/getLogos/:name", async (req, res) => {
    let gameLogos = await findSteamLogos(req.params.name);
    console.log(req.params.name);
    res.send(gameLogos);
  });

  /********************************
      Download Log and Save to DB
  *********************************/
  APP.post("/downloadLogo", async (req, res) => {
    let image = await downloadSteamImage(`${req.body.url}`, `${req.body.name}`);

    let newData = {
      _id: Math.floor(Math.random() * 1000000),
      name: req.body.name,
      imageLocation: `${req.body.name}.jpg`,
      platform: req.body.platform,
      category: req.body.category,
      path: req.body.path,
    };

    data.items.push(newData);
    sortByNameAsc();
    writeDataToFile();
    console.log(`Data has been saved!!`);
    res.redirect("/");
  });

  /************************
        Open Game / App
  ************************/
  APP.get("/openPath/:name", (req, res) => {
    shell.openPath(`${req.params.name}`);
    res.sendStatus(200);
  });

  /*************************
       Create Data File
  *************************/
  APP.get("/saveData/:path", (req, res) => {
    FS.writeFileSync(
      PATH.join(`${req.params.path}/pin_games_backup_data_${Date.now()}.json`),
      `${JSON.stringify(data.items)}`
    );
    res.sendStatus(200);
  });
};
