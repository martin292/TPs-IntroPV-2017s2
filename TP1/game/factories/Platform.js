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

	this.processCollition = function(j){
		if(!this.hasCollide){
			this.hasCollide = true;
			this.processTypeCollition(j);
		};
	};

	this.processTypeCollition = function(j){
		if(this.jumperIsOnThePlatform(j.body.bottom)){
			this.process(j);
		}else{
			this.hasCollide = false;
		};		
	};

	this.process = function(j){
		switch(this.type){
			case 0: 
				j.score += 5; 
				break;
			case 1: 
				this.body.allowGravity = true; 
				j.score += 10; 
				break;
			case 2: 
				j.score += 100; 
				game.state.start('boot');
		};
	};

	this.jumperIsOnThePlatform = function(jumperBottom){
		return jumperBottom == this.body.top;
	};

	this.accelerate = function(){
		this.body.velocity.y += 15;
	};

};

Platform.prototype = Object.create(Phaser.Sprite.prototype);
Platform.prototype.constructor = Platform;