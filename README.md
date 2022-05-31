# Summary

I created a simple app to catalog your games you have installed, want to play later and are on your wishlist. Also stores what launcher game is connected to, so you will never forget again ;-).

![App with a bunch of games added](https://github.com/RichardFelix/Pin_Games/blob/main/ReadME_images/default.png?raw=true)

# Tools and Technology used

    Node.js
    Express
    Electron
    Pug
    JavaScript
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

# Walkthrough

### Hit the plus button to add your games.

![App with no games added](https://github.com/RichardFelix/Pin_Games/blob/main/ReadME_images/addSomeGames1.png?raw=true)

### Modal with all required fields to add a new game. Either search Steam for cover or upload your own.

![App modal to add games](https://github.com/RichardFelix/Pin_Games/blob/main/ReadME_images/pinGames_addNewGames1.png?raw=true)

### Click on any game and pop open the update / delete modal.

![App modal to update or delete games](https://github.com/RichardFelix/Pin_Games/blob/main/ReadME_images/pinGames_updateGame1.png?raw=true)

# Nerd Info

I orignally created this app as a web app. But was like why not use Electron so I could share with my friends. This app is using a simple JSON read/write file in the user data folder to store game data. Since this app is so small I thought that would be better then packaging SQL lite with app. Or changing config file to add a MongoDB location then use electron builder to create exe file.
