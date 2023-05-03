class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        //this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_explosion1', './assets/alienblast.wav');
        this.load.audio('sfx_explosion2', './assets/echoblast.wav');
        this.load.audio('sfx_explosion3', './assets/explosion.wav');
        this.load.audio('sfx_explosion4', './assets/explosion2.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.image('starnebula', './assets/starnebula.png');
        this.load.audio('sfx_music', './assets/HEROICCC.mp3');
    }


    create() {
        this.starnebula = this.add.tileSprite(0, 0, 640, 480, 'starnebula').setOrigin(0, 0);

        let menuConfig = {
            fontFamily: 'Sci_fied',
            fontSize: '28px',
            //backgroundColor: '#F3B141',
            color: '#fcfcf5',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        menuConfig.color = '#fcfcf5';
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use ←→ arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        //menuConfig.backgroundColor = '#00FF00';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          game.settings = {
            spaceshipSpeed: 3,
            stealthshipSpeed: 5,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          game.settings = {
            spaceshipSpeed: 4,
            stealthshipSpeed: 6,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
    }
}