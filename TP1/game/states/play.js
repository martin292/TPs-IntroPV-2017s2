var play = {
	
	preload: function() {},

	create: function() {
		this.createKeys();
		this.createPlatforms();
		this.createJumper();
	},

	update: function() {
		game.physics.arcade.collide(jumper, platforms);
  	this.processInput();
  	if(jumper.y >= 570){
  		game.state.start('boot');
  	};
	},

	//-----------------------------------


	createKeys: function(){
  	arrows = game.input.keyboard.createCursorKeys();
  	jump = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	},

	createPlatforms: function(){
		platforms = game.add.group();
		platforms.enableBody = true;

		var data = game.cache.getJSON('level_1');

  	data.forEach(function(platform){
    	platforms.create(platform.x, platform.y, 'platform');
  	});

  	platforms.forEach(function(platform){
    	platform.scale.setTo(0.6);
    	platform.anchor.setTo(0.5);
  	});

  	platforms.setAll('body.allowGravity', false);
  	platforms.setAll('body.immovable', true);
  	platforms.setAll('body.checkCollision.down', false);
  	platforms.setAll('body.velocity', new Phaser.Point(0, 90));
	},

	createJumper: function(){
		jumper = game.add.sprite(400, 460, 'jumper');
  	jumper.frame = 0;
  	jumper.scale.setTo(0.1, 0.1);
  	jumper.anchor.setTo(0.5);
  	jumper.animations.add('left', [8, 9, 10, 11], 10, true);
  	jumper.animations.add('right', [4, 5, 6, 7], 10, true);

  	game.physics.arcade.enable([jumper]);

  	jumper.body.collideWorldBounds = true;
  	jumper.body.allowGravity = true;
  	jumper.body.gravity.y = 1000;
  	jumper.body.maxVelocity.y = 500;
	},

	processInput: function(){
		if(this.leftIsDown()) { 
			this.processLeftMovement();  
		}
  	else if(this.rightIsDown()) { 
  		this.processRightMovement(); 
  	}
  	else { 
  		this.processWaiting();
  	};

  	this.processJump();
	},

	leftIsDown: function(){return	arrows.left.isDown;},
	rightIsDown: function(){return arrows.right.isDown;},

	processLeftMovement: function(){
		jumper.animations.play('left');
    jumper.position.x -= 5;
    direction = 'left';
	},

	processRightMovement: function(){
		jumper.animations.play('right');
    jumper.position.x += 5;
    direction = 'right';
	},

	processJump: function(){
		if (jump.isDown && (jumper.body.onFloor() || jumper.body.touching.down) && game.time.now > jumpTimer){
    	jumper.body.velocity.y = -600;
    	jumpTimer = game.time.now + 750;
  	};
	},

	processWaiting: function(){
		if(direction != 'waiting'){
      jumper.animations.stop();
    }
    direction = 'waiting';
	}

};