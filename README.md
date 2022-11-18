# Summary

Launch and catalog your games. All in one place as it should be :-). Catalog your games you have installed, want to play later and are on your wishlist. Also stores what launcher game is connected to, so you will never forget again ;-).  Also added filter, save data, search functionality and complete front-end rewrite using JS Web Components in v2.0.0 release!!  

![App with a bunch of games added](https://github.com/RichardFelix/Pin_Games/blob/main/ReadME_images/default.png?raw=true)

# Tools and Technology used

    Node.js
    Express
    Electron
    Pug
    Vite
    JavaScript (JS Web Componenets)
    HTML
    CSS

# System Requirements

Windows 10+ \
 Mac 11+ - Coming Soon \
 Linux - Coming Soon

# How to Install

1. Download Newest Release
2. Unzip Folder
3. Install Application
4. Profit?!?!?!?

# Web Component Layout
![Web Component Layout](https://github.com/RichardFelix/Pin_Games/blob/main/ReadME_images/html.png?raw=true)

# Walkthrough

### Hit the plus button to add your games.

![App with no games added](https://github.com/RichardFelix/Pin_Games/blob/main/ReadME_images/pinGames_noGames.png?raw=true)

### Modal with all required fields to add a new game (App Location is not required can be left blank). Either search Steam for cover or upload your own.

![App modal to add games](https://github.com/RichardFelix/Pin_Games/blob/main/ReadME_images/addGame.png?raw=true)

### Click on any game and pop open the update / delete modal.

![App modal to update or delete games](https://github.com/RichardFelix/Pin_Games/blob/main/ReadME_images/editGame.png?raw=true)

### Click on any game and pop open the play / edit modal if you have a application location saved for that game.  Press yellow play button to play your game or edit to open update / delete modal.

![Launch or Edit your Game](https://github.com/RichardFelix/Pin_Games/blob/main/ReadME_images/play.png?raw=true)

### After you add your first game you will have access to other features. Clicking hamburger button will open this menu below.

![show menu](https://github.com/RichardFelix/Pin_Games/blob/main/ReadME_images/menuOpen.png?raw=true)

## Click filter icon to find games by platform

![filter modal](https://github.com/RichardFelix/Pin_Games/blob/main/ReadME_images/filter.png?raw=true)

## Filter active

![filter active](https://github.com/RichardFelix/Pin_Games/blob/main/ReadME_images/filterActive.png?raw=true)

## Click search icon to find games by name

![search modal](https://github.com/RichardFelix/Pin_Games/blob/main/ReadME_images/search.png?raw=true)

## Search active

![search active](https://github.com/RichardFelix/Pin_Games/blob/main/ReadME_images/searchActive.png?raw=true)

## Click save icon to backup your data to store in safe place

![save data modal](https://github.com/RichardFelix/Pin_Games/blob/main/ReadME_images/saveData.png?raw=true)

# Nerd Info

I orignally created this app as a web app. But was like why not use Electron so I could share with my friends. This app is using a simple JSON read/write file in the user data folder to store game data. Since this app is so small I thought that would be better then packaging SQL lite with app. Or changing config file to add a MongoDB location then use electron builder to create exe file.
