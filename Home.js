class Home extends Phaser.Scene{
	constructor(){
		super({key:"Home"});
	}
	
	preload(){
		this.load.image('homebg','visual/home.png');
		//this.load.image('boxs','visual/bluebox.png');
		this.load.image('boxs','visual/transbox.png');
		//this.load.image('side','visual/sidebluebox.jpg');
		this.load.image('side','visual/sidetransbluebox.png');
		this.load.spritesheet('character','visual/sprites-character.png', 
							  { frameWidth: 80, frameHeight: 120 });

	}
	
	
	create(){
        $.get('Admin/name.php', function(data) {
               //alert('Load was performed.');
               //alert(data);
			   //table = data;
			    name = data;
                //console.log(scoresArray);
               
            });
        console.log(name);
        
		this.add.image(0,0,'homebg').setScale(1.7).setOrigin(0,0);
		this.physics.world.setBounds(10, 50, 785, 535, true, true, true, true);

		
		//building border
		var boxs = this.physics.add.staticGroup();
		//Table
		boxs.create(87,250, 'boxs').setScale(0.3).refreshBody();
		boxs.create(738,250, 'boxs').setScale(0.3).refreshBody();
		boxs.create(685,523, 'boxs').setScale(0.3).refreshBody();
		boxs.create(200,523, 'boxs').setScale(0.3).refreshBody();
		//wall
		boxs.create(40,340, 'boxs').setScale(0.3).refreshBody();
		boxs.create(140,340, 'boxs').setScale(0.3).refreshBody();
		boxs.create(240,340, 'boxs').setScale(0.3).refreshBody();
		boxs.create(310,340, 'boxs').setScale(0.3).refreshBody();
		boxs.create(670,340, 'boxs').setScale(0.3).refreshBody();
		boxs.create(750,340, 'boxs').setScale(0.3).refreshBody();
		//counter
		boxs.create(550,305, 'boxs').setScale(0.7).refreshBody();
		boxs.create(50,120, 'side').setScale(0.3).refreshBody();
		boxs.create(195,120, 'side').setScale(0.3).refreshBody();
		boxs.create(350,120, 'side').setScale(0.3).refreshBody();
		boxs.create(480,120, 'side').setScale(0.3).refreshBody();
		boxs.create(635,120, 'side').setScale(0.3).refreshBody();
		boxs.create(780,120, 'side').setScale(0.3).refreshBody();
		
        //usertext
        this.usertext = this.add.text(10, 0, '', { font: '20px Roboto' }).setScrollFactor(0).setDepth(3).setTint(0xe3f5f4);
        
		//level1
		var levelbox1 = this.physics.add.staticGroup();
		levelbox1.create(125,40, 'boxs').setScale(0.3).refreshBody();
		//level2
		var levelbox2 = this.physics.add.staticGroup();
		levelbox2.create(290,40, 'boxs').setScale(0.3).refreshBody();
		//level3
		var levelbox3 = this.physics.add.staticGroup();
		levelbox3.create(550,40, 'boxs').setScale(0.3).refreshBody();
		//level4
		var levelbox4 = this.physics.add.staticGroup();
		levelbox4.create(720,40, 'boxs').setScale(0.3).refreshBody();
		//SaveMenu
		var savemenu = this.physics.add.staticGroup();
		savemenu.create(565,360, 'boxs').setScale(0.3).refreshBody();
		//start
		var startmenu = this.physics.add.staticGroup();
		startmenu.create(400,605, 'boxs').setScale(0.2).refreshBody();
		
		//main character
		kid = this.physics.add.sprite(400,550, 'character');
		kid.body.setAllowGravity(false);
		kid.setScale(0.5);
		kid.setBounce(0.2);
		kid.setCollideWorldBounds(true);
		
		//collide with house
		this.physics.add.collider(kid, boxs);
		
		//moving the kid
		this.anims.create({
			key: 'turn',
			frames: [ { key: 'character', frame: 0 } ],
			frameRate: 20
		});
		this.anims.create({
			key: 'foward',
			frames: this.anims.generateFrameNumbers('character', { start: 0, end: 3 }),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key: 'back',
			frames: this.anims.generateFrameNumbers('character', { start: 4, end: 7 }),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key: 'left',
			frames: this.anims.generateFrameNumbers('character', { start: 8, end: 11 }),
			frameRate: 10,
			repeat: -1
		});
		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers('character', { start: 14, end: 16 }),
			frameRate: 10,
			repeat: -1
		});
		
		//for the arrow keys
		cursors = this.input.keyboard.createCursorKeys();
		//for wasd keys
		this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);	
		this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
		
		//mouselock
		game.canvas.addEventListener('mousedown', function () {
        	game.input.mouse.requestPointerLock();
    	});
		
		//mouseunlock
		this.input.keyboard.on('keydown_Q', function (event) {
        if (game.input.mouse.locked)
            game.input.mouse.releasePointerLock();
		}, 0, this);
		
		//level1
		this.physics.add.collider(kid, levelbox1, function(scene){
								 this.scene.start("Game4")},null, this);
		//level2
		this.physics.add.collider(kid, levelbox2, function(scene){
								 this.scene.start("Game3")},null, this);
		//level3
		this.physics.add.collider(kid, levelbox3, function(scene){
								 this.scene.start("Game2")},null, this);
		//level4
		this.physics.add.collider(kid, levelbox4, function(scene){
								 this.scene.start("Game1")},null, this);
		//menu
		this.physics.add.collider(kid, savemenu, function(scene){
								 this.scene.start("Menu")},null, this);
		//start
		this.physics.add.collider(kid, startmenu, function(scene){
								 this.scene.start("Start")},null, this);

	}
	
	update(delta){
        this.usertext.setText('ID: '+ name).setScrollFactor(0);
		if (this.key_D.isDown && this.key_W.isDown)
		{
			kid.anims.play('right', true);
			kid.setVelocityX(160);
			kid.setVelocityY(-160);
		}
		else if (this.key_S.isDown && this.key_D.isDown)
		{
			kid.anims.play('right', true);
			kid.setVelocityX(160);
			kid.setVelocityY(160);
			
		}
		else if (this.key_A.isDown && this.key_S.isDown)
		{
			kid.anims.play('left', true);
			kid.setVelocityX(-160);
			kid.setVelocityY(160);
			
		}
		else if (this.key_A.isDown && this.key_W.isDown)
		{
			kid.anims.play('left', true);
			kid.setVelocityX(-160);
			kid.setVelocityY(-160);
			
		}
		else if (this.key_A.isDown)
		{
			kid.anims.play('left', true);
			kid.setVelocityX(-160);
			//kid.setVelocityX(-400);
		}	
		else if (this.key_D.isDown)
		{
			kid.anims.play('right', true);
			kid.setVelocityX(160);
			//kid.setVelocityX(400);
		}	
		else if (this.key_S.isDown)
		{
			kid.anims.play('foward', true);
			kid.setVelocityY(160);
			//kid.setVelocityY(400);
		}	
		else if (this.key_W.isDown)
		{
			kid.anims.play('back', true);
			kid.setVelocityY(-160);
			//kid.setVelocityY(-400);
		}
		else
		{
			kid.setVelocityX(0);
			kid.setVelocityY(0);
			kid.anims.play('turn');
		}
	}
		
}