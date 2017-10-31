var game = new Phaser.Game(800, 600, Phaser.AUTO, 'minion2');

var cursors;
var spacebar;
var hero;
var enemy;
var shake;
var map;
var layer;
var enemies;
var blocks;


game.state.add('boot', boot);
game.state.add('load', load);
game.state.add('play', play);

game.state.start('boot');