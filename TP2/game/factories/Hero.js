class Hero extends Phaser.Sprite{

	constructor(game, x, y, sprite){
		super(game, x, y, sprite);

		game.physics.arcade.enable(this);

		game.add.existing(this);

		this.scale.setTo(1);
		this.anchor.setTo(0.5);

		this.body.gravity.y = 1000;
		this.body.maxVelocity.y = 1000;

		this.body.allowGravity = true;
		this.body.collideWorldBounds = true;
	}

	//-----------------------------------------------------------

	processInput(cursors, spacebar){
		if(cursors.left.isDown) {
			this.scale.setTo(-1, 1);
			this.body.velocity.x = -250;
		}
  		else if(cursors.right.isDown) {
  			this.scale.setTo(1);
  			this.body.velocity.x = 250;
  		}
  		else { 
      		this.body.velocity.x = 0;
  		};

  		if (spacebar.isDown && (this.body.onFloor() || this.body.touching.down)){
    		this.body.velocity.y = -550;
  		};
	}

	processCollition(e){
		if(this.body.touching.down && e.body.touching.up){
			this.body.velocity.y = -250;
			e.die();			
		}else{
			shake.shake(5);
			this.bounceBack();
		}
	}

    bounceBack(){
		var newx = this.x;
		var newy = this.y -25;
		
		if (this.body.touching.right || this.body.blocked.right) {
			newx -= 25;
    	}
    	else if (this.body.touching.left || this.body.blocked.left) {
    		newx += 25;
    	}

    	game.add.tween(this).to( { x: newx, y: newy }, 50, Phaser.Easing.Linear.None, true);
	}

	createEmitter(eX, eY){
        var emitter = game.add.emitter(0, 0, 100);
        emitter.makeParticles('pixelWhite');
        emitter.gravity = 200;
        emitter.x = eX;
        emitter.y = eY;

        return emitter;
    }

}