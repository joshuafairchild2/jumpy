let GameState = {

  init: function() {
    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.HORIZONTAL_SPEED = 200;
  },

  preload: function() {
    this.load.image('ball','assets/images/ball.png');
    this.load.image('paddle','assets/images/paddle.png');
  },

  create: function() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 1000;
    this.stage.backgroundColor = 'black';
    this.world.resize(375,6000)


    this.ball = this.add.sprite(30, 5700,'ball');
    this.game.physics.arcade.enable(this.ball);
    this.ball.scale.setTo(0.75);
    this.ball.anchor.setTo(0.5);
    this.ball.body.collideWorldBounds = true;
    this.camera.follow(this.ball);


    this.paddles = this.game.add.group();
    this.paddles.enableBody = true;
    this.paddles.createMultiple(30,'paddle');
    this.addPaddle(200,5600);
    this.addPaddle(125,5750);
    this.addPaddle(330,5800);
    this.addPaddle(50,5900);
  },


  update: function() {
    this.game.physics.arcade.collide(this.ball, this.paddles, this.bounce);

    if (this.cursors.left.isDown) {
      this.ball.body.velocity.x = -this.HORIZONTAL_SPEED;
    }
    else if (this.cursors.right.isDown) {
      this.ball.body.velocity.x = this.HORIZONTAL_SPEED;
    }

  },

  addPaddle: function(x,y) {
    let paddle = this.paddles.getFirstDead();

    paddle.reset(x,y);
    paddle.checkWorldBounds = true;
    paddle.outOfBoundsKill = true;
    paddle.scale.setTo(1.5);
    paddle.anchor.setTo(0.5);
    paddle.body.immovable = true;
    paddle.body.allowGravity = false;
    paddle.body.checkCollision.down = false;
    paddle.body.checkCollision.left = false;
    paddle.body.checkCollision.right = false;
  },

  bounce: function(ball,paddles) {
    ball.body.velocity.y = -600;
  }
};


let game = new Phaser.Game(375, 700, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');
