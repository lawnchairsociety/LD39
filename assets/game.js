var Game = {
  display: null,
  map: {},
  displaySize: {
    width: 160,
    height: 50
  },
  engine: null,
  player: null,
  pedro: null,
  bananas: null,

  init: function() {
    this.display = new ROT.Display();//this.displaySize);
    document.body.appendChild(this.display.getContainer());

    this._generateMap();

    var scheduler = new ROT.Scheduler.Simple();
    scheduler.add(this.player, true);
    scheduler.add(this.pedro, true);
    this.engine = new ROT.Engine(scheduler);
    this.engine.start();
  }
};

Game._generateMap = function() {
  var digger = new ROT.Map.Digger();
  var freeCells = [];

  var digCallback = function(x, y, value) {
    if (value) { // dont store walls
      return;
    }

    var key = x + "," + y;
    freeCells.push(key);
    this.map[key] = Glyphs.corridor;
  }

  digger.create(digCallback.bind(this));

  this._generateBoxes(freeCells);

  this._drawWholeMap();

  this.player = this._createBeing(Player, freeCells);
  this.pedro = this._createBeing(Pedro, freeCells);
};

Game._generateBoxes = function(freeCells) {
  for (var i = 0; i < 10; i++) {
    var index = Math.floor(ROT.RNG.getUniform() * freeCells.length);
    var key = freeCells.splice(index, 1)[0];
    this.map[key] = Glyphs.box;
    if (!i) {
      this.bananas = key; // banana is in the first box
    }
  }
};

Game._drawWholeMap = function() {
  for (var key in this.map)
  {
    var parts = key.split(",");
    var x = parseInt(parts[0]);
    var y = parseInt(parts[1]);
    if (this.map[key] == Glyphs.box) {
      this.display.draw(x, y, this.map[key], Colors.interactive);  
    }
    else {
      this.display.draw(x, y, this.map[key], Colors.normal);
    }
  }
};

Game._createBeing = function(what, freeCells) {
  var index = Math.floor(ROT.RNG.getUniform() * freeCells.length);
  var key = freeCells.splice(index, 1)[0];
  var parts = key.split(",");
  var x = parseInt(parts[0]);
  var y = parseInt(parts[1]);

  return new what(x, y);
};