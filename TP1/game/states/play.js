var play = {

	preload: function() {},

	create: function() {
  	this.createKeys();
		this.createPlatforms();
		this.createJumper();
    this.createTimeEvent();
    this.createScore();
  },

  update: function() {
		this.checkCollitions();
  	this.processInput();
  	this.checkLose();
	},

  render: function(){

  },

	//-----------------------------------


	createKeys: function(){
  	arrows = game.input.keyboard.createCursorKeys();
  	jump = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	},

	createPlatforms: function(){
		platforms = game.add.group();

		var data = game.cache.getJSON('level_1');

  	data.forEach(function(p){
      platforms.add(new Platform(game, p.x, p.y, 'platform', p.type));    
  	});
	},

	createJumper: function(){
    jumper = new Jumper(game, 400, 460, 'jumper');
	},

  createTimeEvent: function(){
    game.time.events.loop(10000, this.accelerate, this);
  },

  checkCollitions: function(){
    game.physics.arcade.collide(jumper, platforms, this.processCollition, null, this);
  },

  processCollition: function(j, platform){
    platform.processCollition(j);
    text.setText('Score: ' + jumper.score);
  },

	processInput: function(){
		if(this.leftIsDown()) { 
			this.processLeftMovement();  
		}
  	else if(this.rightIsDown()) { 
  		this.processRightMovement(); 
  	}
  	else { 
      this.stayStill();
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

  stayStill: function(){
    jumper.animations.stop();
  },

	processJump: function(){
		if (jump.isDown && (jumper.body.onFloor() || jumper.body.touching.down)){
    	jumper.body.velocity.y = -600;
  	};
	},

  checkLose: function(){
    if(jumper.body.onFloor()){
      game.state.start('lose');
    };
  },

  accelerate: function(){
    platforms.forEach(function(platform){
      platform.accelerate();
    });
  },

  createScore: function(){
    text = game.add.text(2, 1, "Puntos: " + jumper.score, { font: "32px Courier", fill: "#ffffff" });
  }

};
