var game = new Phaser.Game(800, 600, Phaser.AUTO, 'doodlejump');

var button;
var arrows;
var jump;
var platforms;
var jumper;
var text;


game.state.add('boot', boot);
game.state.add('load', load);
game.state.add('play', play);
game.state.add('win', win);
game.state.add('lose', lose);

game.state.start('boot');