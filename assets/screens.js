Game.Screen = {};

Game.Screen.mainScreen = {
    enter: function() {
        console.log("Entered main screen");
    },
    exit: function() {
        console.log("Exited main screen");
    },
    render: function(display) {
        display.drawText(1, 1, "Welcome to Water & Power: A Utilities Roguelike");
        display.drawText(1, 3, "To play, press [Enter]");
    },
    handleInput: function(inputType, data) {
        if (inputType == "keydown") {
            if (data.keyCode == ROT.VK_RETURN) {
                Game.switchScreen(Game.Screen.playScreen);
            }
        }
    }
};

Game.Screen.playScreen = {
    enter: function() {
        console.log("Entered play screen");
        Game._generateMap();

        var scheduler = new ROT.Scheduler.Simple();
        scheduler.add(Game.player, true);
        scheduler.add(Game.pedro, true);
        Game.engine = new ROT.Engine(scheduler);
        Game.engine.start();
    },
    exit: function() {
        console.log("Exited play screen");
    },
    render: function(display) {

    }
};

Game.Screen.winScreen = {
    enter: function() {
        console.log("Entered win screen");
    },
    exit: function() {
        console.log("Exited win screen");
    },
    render: function(display) {
        display.drawText(1, 1, "You found the bananas! Winner!");
        display.drawText(1, 3, "Press [Esc] to go back");
    },
    handleInput: function(inputType, data) {
        if (inputType == "keydown") {
            if (data.keyCode == ROT.VK_ESCAPE) {
                Game.switchScreen(Game.Screen.mainScreen);
            }
        }
    }
};

Game.Screen.loseScreen = {
    enter: function() {
        console.log("Entered lose screen");
    },
    exit: function() {
        console.log("Exited lose screen");
    },
    render: function(display) {
        display.drawText(1, 1, "Pedro caught you! Game Over!");
        display.drawText(1, 3, "Press [Esc] to go back");
    },
    handleInput: function(inputType, data) {
        if (inputType == "keydown") {
            if (data.keyCode == ROT.VK_ESCAPE) {
                Game.switchScreen(Game.Screen.mainScreen);
            }
        }
    }
};