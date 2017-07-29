Game.Screen = {};

Game.Screen.mainScreen = {
  enter: function() { console.log("Entered main screen"); },
  exit: function() { console.log("Exited win screen"); },
  render: function(display) {
    display.drawText(1, 1, "Hello World");
    display.drawText(1, 2, "Press %c{red}%b{blue}[Enter]%c{}%b{} to continue.");
  },
  handleInput: function(inputType, data) {
    if (inputType === 'keydown') {
      if (data.keyCode === ROT.VK_RETURN) {
        Game.switchScreen(Game.Screen.playScreen);
      }
    }
  }
}

Game.Screen.playScreen = {
  enter: function() { console.log("Entered play screen"); },
  exit: function() { console.log("Exited play screen"); },
  render: function(display) {
    display.drawText(1, 1, "Press %c{red}%b{blue}[1]%c{}%b{} to win.");
    display.drawText(1, 2, "Press %c{red}%b{blue}[2]%c{}%b{} to lose.");
    display.drawText(1, 3, "Press %c{red}%b{blue}[Esc]%c{}%b{} to go back.");
    display.drawText(4, 4, "DUDE!");
    display.drawText(5, 5, "SWEET!");
  },
  handleInput: function(inputType, data) {
    if (inputType === 'keydown') {
      if (data.keyCode === ROT.VK_1) {
        Game.switchScreen(Game.Screen.winScreen);
      }
      else if (data.keyCode === ROT.VK_2) {
        Game.switchScreen(Game.Screen.loseScreen);
      }
      else if (data.keyCode === ROT.VK_ESCAPE) {
        Game.switchScreen(Game.Screen.mainScreen);
      }
    }
  }
}

Game.Screen.winScreen = {
  enter: function() { console.log("Entered win screen"); },
  exit: function() { console.log("Exited win screen"); },
  render: function(display) {
    display.drawText(1, 1, "%c{yellow}YOU WIN!!");
    display.drawText(1, 2, "Press %c{red}%b{blue}[Esc]%c{}%b{} to go back.");
  },
  handleInput: function(inputType, data) {
    if (inputType === 'keydown') {
      if (data.keyCode === ROT.VK_ESCAPE) {
        Game.switchScreen(Game.Screen.playScreen);
      }
    }
  }
}

Game.Screen.loseScreen = {
  enter: function() { console.log("Entered lose screen"); },
  exit: function() { console.log("Exited lose screen"); },
  render: function(display) {
    display.drawText(1, 1, "%c{red}YOU LOSE \u2554");
    display.drawText(1, 2, "Press %c{red}%b{blue}[Esc]%c{}%b{} to go back.");
  },
  handleInput: function(inputType, data) {
    if (inputType === 'keydown') {
      if (data.keyCode === ROT.VK_ESCAPE) {
        Game.switchScreen(Game.Screen.playScreen);
      }
    }
  }
}
