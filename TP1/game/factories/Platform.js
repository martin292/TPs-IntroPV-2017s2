Platform = function(game, x, y, sprite, type){
	
	Phaser.Sprite.call(this, game, x, y, sprite);
	
	game.physics.arcade.enable(this);
		
	this.scale.setTo(0.6);
	this.anchor.setTo(0.5);
	
	this.body.allowGravity = false;
	this.body.immovable = true;
	this.body.checkCollision.down = false;
	this.body.checkCollision.left = false;
	this.body.checkCollision.right = false;
	this.body.velocity = new Phaser.Point(0, 90);

	this.hasCollide = false;

	this.type = type;

	this.processCollition = function(jumperBottom){
		if(!this.hasCollide){
			this.hasCollide = true;
			this.processTypeCollition(jumperBottom);
		};
	};

	this.processTypeCollition = function(jumperBottom){
		switch(this.type){
			case 1:
				if(this.jumperIsOnThePlatform(jumperBottom)){
					this.body.velocity = new Phaser.Point(0, 120);
				}else{this.hasCollide = false;};
		};
	};

	this.jumperIsOnThePlatform = function(jumperBottom){
		return jumperBottom == this.body.top;
	};

};

Platform.prototype = Object.create(Phaser.Sprite.prototype);
Platform.prototype.constructor = Platform;