Platform = function(game, x, y, sprite, type){
	
	var game = game;
	var x = x;
	var y = y;
	var sprite = sprite;
	var type = type
	//

	this.create = function(){
		Phaser.Sprite.call(this, game, x, y, sprite);
		this.scale.setTo(0.6);
		this.anchor.setTo(0.5);
	};

};

Platform.prototype = Object.create(Phaser.Sprite.prototype);
Platform.prototype.constructor = Platform;