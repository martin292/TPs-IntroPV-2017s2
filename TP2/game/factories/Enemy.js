class Enemy extends Phaser.Sprite{

	constructor(game, x, y, speed, sprite){
		super(game, x, y, sprite);

		game.physics.arcade.enable(this);

		game.add.existing(this);

		this.speed = speed;

		this.scale.setTo(1);
		this.anchor.setTo(0.5);

		this.body.gravity.y = 1000;
		this.body.maxVelocity.y = 1000;

		this.body.allowGravity = true;
		this.body.collideWorldBounds = true;

		this.body.velocity.x = speed;
	}

	processMovement(){
		if (this.body.touching.right || this.body.blocked.right) {
      		this.scale.set(-1, 1);
      		this.body.velocity.x = -this.speed;
    	}
    	else if (this.body.touching.left || this.body.blocked.left) {
    		this.scale.set(1);
      		this.body.velocity.x = this.speed;
    	}
	}

	die(){
		this.kill();
		this.createEmitter(this.x, this.y).start(true, 2000, null, 10);
	}

	createEmitter(eX, eY){
        var emitter = game.add.emitter(0, 0, 100);
        emitter.makeParticles('pixelRed');
        emitter.gravity = 200;
        emitter.x = eX;
        emitter.y = eY;

        return emitter;
    }

}