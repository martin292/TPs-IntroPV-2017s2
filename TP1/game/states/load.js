var load = {
	
	preload: function() {
		game.load.image('platform', 'resources/platform.png');
  	game.load.spritesheet('jumper', 'resources/jumper.png', 1841/4, 2400/4);
  	game.load.json('level_1', 'game/levels/Level1.json');
	},

	create: function() {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.arcade.gravity.y = 300;

		game.stage.backgroundColor = '#00bfff';
		

		game.state.start('play');
	},

	update: function() {}

};