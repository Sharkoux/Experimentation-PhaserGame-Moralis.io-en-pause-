








var bouton, bouton2, bouton3, user, anim, anim2, anim3, audio1;

export default class Menu extends Phaser.Scene {


    constructor() {
        super('Menu');
    } 


    preload() {
        
		this.load.image('fond', './texture/fondmenu.png');
        this.load.image('bouton1', './texture/Jouer.png');
        this.load.image('play2', './texture/Playe2.png');
        this.load.image('anim', './texture/anim1 (1).png');
        this.load.image('anim2', './texture/anim1 (2).png');
        this.load.image('anim3', './texture/anim1 (3).png');
        this.load.audio('audio1', ['./Music/sonMenu.mp3']);
	}

	create() {
        this.add.image(450, 295, 'fond').setScale(0.95);
        anim = this.physics.add.sprite(25, 580, 'anim').setScale(0.6);
        anim2 = this.physics.add.sprite(5, 588, 'anim2').setScale(0.4);
        anim3 = this.physics.add.sprite(0, 590, 'anim3').setScale(0.3);
        bouton = this.add.sprite(430, 320, 'bouton1').setScale(1);
        audio1 = this.sound.add('audio1', { volume: 2}, {loop: true});
        audio1.play();
        bouton.setInteractive({ useHandCursors: true });
        bouton.on('pointerdown', () => {
            this.onclick()
        });
        bouton.on('pointerover', () => {
            bouton.setTexture('play2');
        });
        bouton.on('pointerout', () => {
            bouton.setTexture('bouton1')
        });

	}

    
    onclick() {
        
     
        this.scene.switch('GameScene1');
        audio1.stop();
    }


    update() { 
        
        anim.setVelocityX(50);
        if (anim.x >= 900) {
        anim.x = 25;
        };
        anim2.setVelocityX(45);
        if (anim2.x >= 900) {
            anim2.x = 5;
            };
        anim3.setVelocityX(40);
        if (anim3.x >= 900) {
        anim3.x = 0;
        };
    }

};


