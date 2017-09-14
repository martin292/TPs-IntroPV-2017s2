var play = {
	
	preload: function() {},

	create: function() {
		this.createKeys();
		this.createPlatforms();
		this.createJumper();
	},

  update: function() {
		this.checkColitions();
  	this.processInput();
  	this.checkLose();
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

  	data.forEach(function(p){
      var platform = new Platform(game, p.x, p.y, 'platform', p.type);
      //platform.create();
      platforms.add(platform);    
  	});
	},

	createJumper: function(){
		jumper = game.add.sprite(400, 460, 'jumper');
  	jumper.frame = 0;
  	jumper.scale.setTo(0.1);
  	jumper.anchor.setTo(0.5);
  	jumper.animations.add('left', [8, 9, 10, 11], 10, true);
  	jumper.animations.add('right', [4, 5, 6, 7], 10, true);

  	game.physics.arcade.enable([jumper]);

  	jumper.body.collideWorldBounds = true;
  	jumper.body.allowGravity = true;
  	jumper.body.gravity.y = 1000;
  	jumper.body.maxVelocity.y = 500;
	},

  checkColitions: function(){
    game.physics.arcade.collide(jumper, platforms);
  },

	processInput: function(){
		if(this.leftIsDown()) { 
			this.processLeftMovement();  
		}
  	else if(this.rightIsDown()) { 
  		this.processRightMovement(); 
  	}
  	else { 
      jumper.animations.stop();
  	};

  	this.processJump();
	},

	leftIsDown: function(){return	arrows.left.isDown;},
	rightIsDown: function(){return arrows.right.isDown;},

	processLeftMovement: function(){
		jumper.animations.play('left');
    jumper.position.x -= 5;
	},

	processRightMovement: function(){
		jumper.animations.play('right');
    jumper.position.x += 5;
	},

	processJump: function(){
		if (jump.isDown && (jumper.body.onFloor() || jumper.body.touching.down) && game.time.now > jumpTimer){
    	jumper.body.velocity.y = -600;
    	jumpTimer = game.time.now + 750;
  	};
	},

  checkLose: function(){
    if(jumper.y >= 570){
      game.state.start('boot');
    };
  }

};
