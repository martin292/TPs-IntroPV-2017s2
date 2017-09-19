Jumper = function(game, x, y, j){

	Phaser.Sprite.call(this, game, x, y, j);

	game.physics.arcade.enable(this);

	game.add.existing(this);

	this.frame = 0;

	this.scale.setTo(0.1);
	this.anchor.setTo(0.5);

	this.animations.add('left', [8, 9, 10, 11], 10, true);
	this.animations.add('right', [4, 5, 6, 7], 10, true);

	this.body.collideWorldBounds = true;
  this.body.allowGravity = true;
  this.body.gravity.y = 1000;
  this.body.maxVelocity.y = 500;

  this.score = 0;

};

Jumper.prototype = Object.create(Phaser.Sprite.prototype);
Jumper.prototype.constructor = Jumper;