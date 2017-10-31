var play = {
	
	preload: function() {},

	create: function() {
		this.createMap();

		hero = new Hero(game, 50, 500, 'hero');

		this.createBlocks();
		this.createEnemies();

		game.camera.follow(hero);
	},

	update: function() {
		game.physics.arcade.collide(hero, layer);
		game.physics.arcade.collide(enemies, layer);
		game.physics.arcade.collide(enemies, blocks);
		game.physics.arcade.collide(hero, enemies, this.processCollition);

		hero.processInput(cursors, spacebar);
		enemies.forEach(function(e) { e.processMovement(); });
	},

	render: function(){
		//blocks.forEach(function(b){game.debug.body(b);});
	},

	//----------------------------------------------------------------

	processCollition: function(h, e){
		h.processCollition(e);
	},

	createMap: function(){
		map = game.add.tilemap('map');
		map.addTilesetImage('sheet1');

		map.setCollisionBetween(0, 64);
		map.setTileIndexCallback(13, this.lose, this);
		map.setTileIndexCallback(49, this.win, this);

		layer = map.createLayer(0);
        layer.resizeWorld();
        layer.debugSettings.forceFullRedraw = true;
	},

	lose: function(){
		console.log('You LOSE!!!');
		game.state.start('boot');
	},

	win: function(){
		console.log('You WIN!!!');
		game.state.start('boot');
	},

	createEnemies: function(){
		enemies = game.add.group();

		var data = game.cache.getJSON('level_0');

		data.forEach(function(e) {
			enemies.add(new Enemy(game, e.x, e.y, e.speed, 'enemy'));
		});
	},

	createBlocks: function(){
		blocks = game.add.group();

		var data = game.cache.getJSON('blocks');

		data.forEach(function(b) {
			blocks.add(new Block(game, b.x, b.y, 'block'));
		});
	}

};