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

    this.ball = this.add.sprite(200, 300,'ball');
    this.game.physics.arcade.enable(this.ball);
    this.ball.scale.setTo(0.75);
    this.ball.anchor.setTo(0.5);
    this.ball.body.bounce.y = 1;
    this.ball.body.collideWorldBounds = true;

    this.paddle = this.add.sprite(200,400,'paddle');
    this.game.physics.arcade.enable(this.paddle);
    this.paddle.scale.setTo(1.5);
    this.paddle.anchor.setTo(0.5);
    this.paddle.body.allowGravity = false;
    this.paddle.body.immovable = true;
    this.paddle.body.checkCollision.down = false;
  },

  update: function() {
    this.game.physics.arcade.collide(this.ball, this.paddle);

    if (this.cursors.left.isDown) {
      this.ball.body.velocity.x = -this.HORIZONTAL_SPEED;
    }
    else if (this.cursors.right.isDown) {
      this.ball.body.velocity.x = this.HORIZONTAL_SPEED;
    }
  }
};


let game = new Phaser.Game(375, 700, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');
