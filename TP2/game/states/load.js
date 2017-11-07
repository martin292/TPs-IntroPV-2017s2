var load = {
	
	preload: function() {
		game.load.tilemap('map', 'game/maps/map0.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('sheet1', 'resources/sheet1.png');

		game.load.image('hero', 'resources/hero.png');
		game.load.image('enemy', 'resources/enemy.png');
		game.load.image('pixelWhite', 'resources/pixel.png');
		game.load.image('pixelRed', 'resources/pixel_red.png');
		game.load.image('block', 'resources/block.png');
		game.load.spritesheet('coin', 'resources/coin.png', 192/6, 32);

		game.load.json('blocks', 'game/levels/blocks.json');
		game.load.json('level_0', 'game/levels/enemies0.json');
		game.load.json('coins', 'game/levels/coins.json');
	},

	create: function() {
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.arcade.gravity.y = 300;

		this.createKeys();

		game.state.start('play');
	},

	update: function() {},

	createKeys: function(){
		cursors = game.input.keyboard.createCursorKeys();
  		spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	}

};