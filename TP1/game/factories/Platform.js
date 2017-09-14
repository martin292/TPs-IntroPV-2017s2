Platform = function(game, x, y, sprite, type){
	
	var game = game;
	var x = x;
	var y = y;
	var sprite = sprite;
	var type = type;
	//

	this.create = function(){
		Phaser.Sprite.call(this, game, x, y, sprite);
		game.physics.arcade.enable(this);
		
		this.scale.setTo(0.6);
		this.anchor.setTo(0.5);
		this.body.allowGravity = false;
		this.body.immovable = true;
		this.body.checkCollision.down = false;
		this.body.velocity = new Phaser.Point(0, 90);
	};

};

Platform.prototype = Object.create(Phaser.Sprite.prototype);
Platform.prototype.constructor = Platform;