let GameState = {

  init: function() {
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
    this.paddle.scale.x = 1.5;
    this.paddle.anchor.setTo(0.5);
    this.paddle.body.allowGravity = false;
    this.paddle.body.immovable = true;
  },

  update: function() {
    this.game.physics.arcade.collide(this.ball, this.paddle);
  }
};


let game = new Phaser.Game(375, 700, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');
