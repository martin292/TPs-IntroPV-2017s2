var game = new Phaser.Game(800, 600, Phaser.AUTO, 'doodlejump');

var arrows;
var jump;
var platforms;
var jumper;
var direction = 'right';
var jumpTimer = 0;

//game.state.add('boot', boot);
game.state.add('load', load);
game.state.add('play', play);

game.state.start('load');