var boot = {
	
	preload: function() {
		game.load.image('button', 'resources/button.png');
	},

	create: function() {
		game.stage.backgroundColor = '#00bfff';

		button = game.add.button(400, 300, 'button', onClick);
		button.anchor.setTo(0.5);
		button.scale.setTo(0.5);

		var style = { font: "32px Courier", fill: "#ffffff" };

		var text1 = game.add.text(2, 1, "IntroPV - Minion 1", style);	
	},

	update: function() {}

};

function onClick() {
	game.state.start('load');
}