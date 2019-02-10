# clicky-game
A memory game demonstrating a React application architecture
  
try it at:  https://mbg-clicky-game.herokuapp.com  
  
## Overview    
The game is an implementation of a memory card game.  The game will shuffle and display twelve cards.  The player chooses a card by clikcing on it.   If that card hasn't been chosen before, the user scores a point. If they've previously chose that card, the game ends.  The game keeps track of high scores and offers the user a new game.  
  
## Demonstration of Functionality    
    

## Developer notes  
- **.gitignore.** - ubiquitous git file to keep node modules and passwords out of GIT  
- **src/...** - the react application with the starting App.js logic  
- **public/...** - the front end of the app minus handlebars, contains jQuery event logic and the CSS, images, fonts and such  
  
## How to install/run the application    
1. Download and install the latest version of Node.js following the website instructions for your platform  
   ` https://nodejs.org/en/download/`   
2. Clone this repository into a clean diretory  
   `$ git clone <repository url>`  
3. Bring down the latest package dependencies using node package manager  
   `npm install`  

## Technology Used  
    
| Package/Interface | Version     | Description                                                              |
| ----------------- | ----------- | ------------------------------------------------------------------------ |
| Node.js           | __11.1.0__  | Main javascript engine for this application                              |
  
## Authors    
Michael Galarneau - Initial work - five0ffour  
February, 2019  
  
## Acknowledgements    
Heroku - an Amazon hosted cloud deployment framework  
