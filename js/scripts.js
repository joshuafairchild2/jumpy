let GameState = {

  init: function() {

  },

  preload: function() {
    this.load.image('ball','assets/images/ball.png');
    this.load.image('paddle','assets/images/paddle.png');
  },

  create: function() {
    this.stage.backgroundColor = 'black';
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.ball = this.add.sprite(200, 300,'ball');
    this.ball.scale.setTo(0.75);
    this.ball.anchor.setTo(0.5);

    this.paddle = this.add.sprite(200,350,'paddle');
    this.paddle.scale.x = 1.5;
    this.paddle.anchor.setTo(0.5);
  },

  update: function() {
  }
};


let game = new Phaser.Game(375, 700, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');
