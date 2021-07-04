var Player = function(x, y) {
    this._x = x;
    this._y = y;
    this._draw();
};

Player.prototype.getX = function() {
    return this._x;
};

Player.prototype.getY = function() {
    return this._y;
};

Player.prototype._draw = function() {
    Game.display.draw(this._x, this._y, Glyphs.player, Colors.player);
};

Player.prototype.act = function() {
    Game.engine.lock();
    window.addEventListener("keydown", this); // use handleEvent function for user input
};

Player.prototype.handleEvent = function(e) {
    // user input
    var keyMap = {}
    keyMap[38] = 0; // up arrow
    keyMap[33] = 1; // up-right arrows together
    keyMap[39] = 2; // right arrow
    keyMap[34] = 3; // down-right arrows together
    keyMap[40] = 4; // down arrow
    keyMap[35] = 5; // down-left arrows together
    keyMap[37] = 6; // left arrow
    keyMap[36] = 7; // up-left arrows together

    var code = e.keyCode;
    if (code == 13 || code == 32) { // space or enter
        this._checkBox();
        return;
    }

    if (!(code in keyMap)) {
        return; // not an input we are looking for
    }

    var diff = ROT.DIRS[8][keyMap[code]];
    var newX = this._x + diff[0];
    var newY = this._y + diff[1];

    var newKey = newX + "," + newY;
    if (!(newKey in Game.map))
    {
        return; // we cannot move this direction
    }

    Game.display.draw(this._x, this._y, Game.map[this._x + "," + this._y]);
    this._x = newX;
    this._y = newY;
    this._draw();
    window.removeEventListener("keydown", this);
    Game.engine.unlock();
};

Player.prototype._checkBox = function() {
    var key = this._x + "," + this._y;
    if (Game.map[key] != Glyphs.box)
    {
        Game.map[key] = Glyphs.corridor;
        alert("There is no box here...");
    }
    else if (key == Game.bananas) {
        alert("You found the bananas! Winner!");
        Game.engine.lock();
        window.removeEventListener("keydown", this);
        Game.init();
    }
    else {
        alert("This box is empty. Keep looking!")
    }
};