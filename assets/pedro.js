var Pedro = function(x, y) {
    this._x = x;
    this._y = y;
    this._draw();
};

Pedro.prototype._draw = function() {
    Game.display.draw(this._x, this._y, Glyphs.pedro, Colors.enemy);
};

Pedro.prototype.act = function() {
    var x = Game.player.getX();
    var y = Game.player.getY();
    
    var passableCallback = function(x, y) {
        return (x + "," + y in Game.map);
    }

    var astar = new ROT.Path.AStar(x, y, passableCallback, { topology: 4 }); // move in 4 directions instead of 8 (makes the AI weaker)
    var path = []
    var pathCallback = function(x, y) {
        path.push([x, y]);
    }

    astar.compute(this._x, this._y, pathCallback);

    path.shift(); // removes Pedro's position
    if (path.length == 1) {
        alert("Pedro caught you! Game Over!");
    }
    else {
        x = path[0][0];
        y = path[0][1];
        Game.display.draw(this._x, this._y, Game.map[this._x + "," + this._y]);
        this._x = x;
        this._y = y;
        this._draw();
    }
}