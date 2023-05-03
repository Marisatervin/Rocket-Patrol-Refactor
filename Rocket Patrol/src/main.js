//Marisa Ervin
//Rocket Patrol: Final Invasion
//12 hours
//(5) New background music, (5) New scroling tile sprite 
//(10) New random explosion sfx, (10) Timer display, (10) Parallax scrolling
//(15) New Spaceship type

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let keyF, keyR, keyLEFT, keyRIGHT;