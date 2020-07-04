class Game4 extends Phaser.Scene{
	constructor(){
		super({key:"Game4"});
	}
	
	preload(){
		
		this.load.image('background','visual/gamemap.png');
		this.load.image('gun', 'visual/gun.png');
		this.load.image('target', 'visual/target.png');
		this.load.image('slime', 'visual/slime.png');
        this.load.image('slime1', 'visual/slimepur.png');
        this.load.image('enemybulletpur', 'visual/enemybulletpur.png');
		this.load.image('zombie','visual/enemy1.png');
		this.load.image('play','visual/play.png');
		this.load.image('pause','visual/pause.png');
		this.load.image('bullet','visual/bullet.png');
		//this.load.image('box','visual/bluebox.png');
		//this.load.image('area','visual/bluebox.png');
		//this.load.image('sidebox','visual/sidebluebox.jpg');
		//this.load.image('sideboxs','visual/sidebluebox2.jpg');
		this.load.image('sidebox','visual/sidetransbluebox.png');
		this.load.image('sideboxs','visual/sidetransbluebox2.png');
		this.load.image('box','visual/transbox.png');
		this.load.image('area','visual/transbox.png');
		this.load.image('detect','visual/detect.png');
		this.load.image('bulleticon','visual/bulleticon.png');
		this.load.image('health','visual/health.png');
		this.load.image('ammo', 'visual/ammo.png');
		this.load.image('sword','visual/swords.png')
		this.load.image('gameover','visual/gameover.png');
		this.load.image('healthbar','visual/health-bar.png');
		//this.load.image('enemybullet','visual/enemybullet.png');
        this.load.image('enemybulletred','visual/enemybulletred.png');
		this.load.image('hp','visual/hp.png');
		this.load.image('winimage', 'visual/win.png');
        this.load.image('enemy_target','visual/transbox.png');
        //this.load.image('enemy_target','visual/bluebox.png');
		this.load.image('healthpack','visual/healthpack.png');
		this.load.spritesheet('character','visual/sprites-character.png', 
							  { frameWidth: 80, frameHeight: 120 });
        
        

	}
	
	create(){
        etarget5 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        etarget6 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        etarget7 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        etarget8 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        
		timerscore = 0;
		playerscoretime = 0;
		timecont = true;
		enemynumber = 2;
		lastFired = 0;
		bulletnum = 0;
		bulletstore = 0;

		bullets = this.physics.add.group({
        classType: Bullet,
		allowGravity: false,
        runChildUpdate: true,
    	});
		bulletnum = 20;
 		bulletstore = 40;
        
        //zombie
		ebullets = this.physics.add.group({
			classType: EpBullet,
			allowGravity: false,
			runChildUpdate: true,
		});
        ebullets6 = this.physics.add.group({
			classType: EpBullet6,
			allowGravity: false,
			runChildUpdate: true,
		});
        ebullets7 = this.physics.add.group({
			classType: EpBullet7,
			allowGravity: false,
			runChildUpdate: true,
		});
        ebullets8 = this.physics.add.group({
			classType: EpBullet8,
			allowGravity: false,
			runChildUpdate: true,
		});
        ebullets9 = this.physics.add.group({
			classType: EpBullet9,
			allowGravity: false,
			runChildUpdate: true,
		});
		
        
		this.timeText = this.add.text(630, 20,'', {font: '25px Roboto'});
		//bg image
		this.back = this.add.image(0, 0, 'background').setScale(1.7).setOrigin(0, 0);

		//map
		this.cameras.main.setBounds(0, 0, 1180, 680);
		this.minimap = this.cameras.add(550, 10000, 250, 150).setZoom(0.5);
		this.minimap.setBounds(0, 0, 1180, 680);
		this.physics.world.setBounds(40, 40, 1100, 620, true, true, true, true);
		
		//bullet
		this.add.image(775,560,'bulleticon').setScale(0.15).setScrollFactor(0).setDepth(2);
		
		//gameover
		gameOverimage = this.add.image(400,300,'gameover').setScale(0.3).setScrollFactor(0).setDepth(2);
		gameOverimage.setVisible(false);
		gameOvermsg = this.add.text(310, 440, 'Press Enter', { font: '40px Roboto' }).setScrollFactor(0).setDepth(2).setTint(0xff0000);
		gameOvermsg.setVisible(false);
		
		//gamewin
		gameWinimage = this.add.image(400,300,'winimage').setScale(0.8).setScrollFactor(0).setDepth(2);
		gameWinmsg = this.add.text(405, 306, '100', { font: '35px Roboto' }).setScrollFactor(0).setDepth(2).setTint(0x22241f);
		gameWinimage.setVisible(false);
		gameWinmsg.setVisible(false);
		
		//cursor target image
		target = this.physics.add.image(400,300,'target');
		target.setScale(0.06);
		target.setCollideWorldBounds(true);
		target.body.setAllowGravity(false);
		
		//health image
        //slime
		ehp1 = this.add.image(-100,-100, 'healthbar').setScale(0.06);
		ehp2 = this.add.image(-100,-100, 'healthbar').setScale(0.06);
		ehp3 = this.add.image(-100,-100, 'healthbar').setScale(0.06);
		ehp4 = this.add.image(-100,-100, 'health').setScale(0.05);
		//zombie
		e1hp1 = this.add.image(-100,-100, 'healthbar').setScale(0.06);
		e1hp2 = this.add.image(-100,-100, 'healthbar').setScale(0.06);
		e1hp3 = this.add.image(-100,-100, 'healthbar').setScale(0.06);
		e1hp4 = this.add.image(-100,-100, 'health').setScale(0.05);
        
		
		hp1 = this.add.image(40,40,'hp').setScale(0.06).setScrollFactor(0);
		hp2 = this.add.image(80,40,'hp').setScale(0.06).setScrollFactor(0);
		hp3 = this.add.image(120,40,'hp').setScale(0.06).setScrollFactor(0);
		hp4 = this.add.image(160,40,'hp').setScale(0.06).setScrollFactor(0);
		hp5 = this.add.image(200,40,'hp').setScale(0.06).setScrollFactor(0);
		
		//building/nature border
		box = this.physics.add.staticGroup();
		area = this.physics.add.staticGroup();
		//house1
		area.create(80,0, 'area').setScale(2.4).refreshBody();
		box.create(450,130, 'box').setScale(0.8).refreshBody();
		//house2
		box.create(940,0, 'box').setScale(1.6).refreshBody();
		//house3
		box.create(1040,440, 'box').setScale(0.6).refreshBody();
		//house4
		area.create(790,450, 'area').setScale(0.7).refreshBody();
		box.create(650,450, 'box').setScale(0.7).refreshBody();
		//tree
		area.create(100,400, 'area').setScale(0.3).refreshBody();
		box.create(320,600, 'area').setScale(0.4).refreshBody();

		//gun info text
		infotext = this.add.text(660, 550, '', {font: '35px Roboto'});
		
		//main character
		kid = this.physics.add.sprite(400,300, 'character').setDepth(0);
		kid.body.setAllowGravity(false);
		kid.setScale(0.5);
		kid.setBounce(0.2);
		kid.setCollideWorldBounds(true);
		kid.health = 5;
		
		//ammo
		ammo = this.physics.add.staticGroup({
				key: 'ammo',
				frameQuantity: 2,
				allowGravity: false,
				immovable: true
			});
		this.spawnAmmoBox(ammo);
		
		//healthpack
		healthpack = this.physics.add.staticGroup({
				key: 'healthpack',
				frameQuantity: 1,
				allowGravity: false,
				immovable: true
			});
		this.spawnHealthBox(healthpack);
		
		//follow map
		this.cameras.main.startFollow(kid);
		this.minimap.startFollow(kid);
		
		//main character gun
		gun = this.add.image(400,300, 'gun').setScale(0.1);
		
		//main character sword
		sword = this.physics.add.image(400,300, 'sword').setScale(0.4).setDepth(1);
		sword.setActive(false).setVisible(false);
		sword.body.setAllowGravity(false);
		
		
		//enemy character
        var spawn = Phaser.Math.Between(1, 4);
        if(spawn === 1)
		{
			slime = this.physics.add.sprite(20,300,'slime');
            zombie = this.physics.add.sprite(1160,600,'slime1');
		}
		else if(spawn === 2)
		{
			slime = this.physics.add.sprite(650,20,'slime');
            zombie = this.physics.add.sprite(1160,300,'slime1');
		}
		else if(spawn === 3)
		{
			slime = this.physics.add.sprite(1160,300,'slime');
            zombie = this.physics.add.sprite(1160,600,'slime1');
		}
		else if(spawn === 4)
		{
			slime = this.physics.add.sprite(1160,600,'slime');
            zombie = this.physics.add.sprite(650,20,'slime1');
		}


		
		slime.body.setAllowGravity(false);
        slime.body.setVelocity(100, -60);
		slime.setScale(0.3);
		slime.body.setBounce(1,1);
		slime.setCollideWorldBounds(true);
		slime.setSize(200,100);
		slime.health = 4;
		detect = this.add.image(200,200,'detect').setScale(0.07);
		detect.setVisible(false);
		this.physics.add.collider(kid, slime);

		//enemy2		
		zombie.body.setAllowGravity(false);
		zombie.body.setVelocity(100, 60);
		zombie.setScale(0.3);
		zombie.body.setBounce(1,1);
		zombie.setCollideWorldBounds(true);
		zombie.setSize(200,100);
		zombie.health = 4;
		detects = this.add.image(200,200,'detect').setScale(0.07);
		detects.setVisible(false);
		this.physics.add.collider(kid, zombie);
		
		//collide with house
		this.physics.add.collider(kid, box);
		this.physics.add.collider(slime, box);
        
		this.physics.add.collider(zombie, box);
		this.physics.add.collider(zombie, slime);


		//collide with area
		this.physics.add.collider(kid, area);
		this.physics.add.collider(slime, area);
		this.physics.add.collider(zombie, area);

		
    	zone = this.add.zone(400, 300).setCircleDropZone(160);
        //slime
		this.input.on('gameobjectover', function (slime, dropZone) {
			overlap = true;
		});

		this.input.on('gameobjectout', function (slime, dropZone) {
			overlap = false;
		});	
        
		//zombie1
		this.input.on('gameobjectover', function (zombie, dropZone) {
			overlaps = true;
		});

		this.input.on('gameobjectout', function (zombie, dropZone) {
			overlaps = false;
		});	
        
		
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
		pointer = this.input.activePointer;
		//for wasd keys
		this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);	
		this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
		this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
		this.key_enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
		
		//mouselock
		game.canvas.addEventListener('mousedown', function () {
        	game.input.mouse.requestPointerLock();
    	});
		
		//mouseunlock
		this.input.keyboard.on('keydown_Q', function (event) {
			//this.pausegame();
        if (game.input.mouse.locked)
			
            game.input.mouse.releasePointerLock();
		}, 0, this);
			
		//target/gun follow the mouse
		this.input.on('pointermove', function (pointer) {
				if (this.input.mouse.locked)
				{
					target.x += pointer.movementX;
					target.y += pointer.movementY;
				}
				else
				{
					target.x = kid.x;
					target.y = kid.y;

				}
		}, this);
		var clicks = true;
		this.input.on('pointerdown', function (pointer, time, lastFired) {
			if(gameOver === false && pointer.rightButtonDown()){
					sword.setActive(true).setVisible(true);
					gun.setActive(false).setVisible(false);
					if (clicks){
					this.physics.add.overlap(sword, slime, this.swordDamage);
					this.physics.add.overlap(sword, zombie, this.swordDamage);

					}
					clicks = false;
					overlap = true;
					overlaps = true;
				}
			
			if(gameOver === false && bulletnum > 0 && pointer.rightButtonDown() === false){
				
				sword.setActive(false).setVisible(false);
				bulletnum = bulletnum - 1;
				console.log('Bullet Count: '+ bulletnum);
				
			var bullet = bullets.get().setActive(true).setVisible(true);
			if (bullet)
			{
				bullet.fire(kid, target);
				this.physics.add.collider(slime, bullet, this.enemyDamage);
				this.physics.add.collider(zombie, bullet, this.enemyDamage);
				this.physics.add.collider(box, bullet, this.boxCallback);
			
			}
			overlap = true;
			overlaps = true;
			}
    	}, this);
		
		timeevent = this.time.addEvent({ delay: 1000, callback: this.onEvent, callbackScope: this, loop: true });
		
		timer = this.time.addEvent({ delay: 80, callback: this.timer, callbackScope: this, loop: true }); 
		
		enemyranmove = this.time.addEvent({ delay: 4000, callback: this.randommovement, callbackScope: this, loop: true });
		
		this.input.on('pointerup', function (pointer) {
				clicks = true;
				clickss = true;
				sword.setActive(false).setVisible(false);
     			gun.setActive(true).setVisible(true);
				slime.setTint();
				zombie.setTint();
    	});
		
		this.physics.add.collider(kid, slime, this.playerDamage);
		this.physics.add.collider(kid, zombie, this.playerDamage);

		
		this.input.keyboard.on('keyup_R',function(event){
			if (bulletstore > 0 && bulletnum < 20){
				var num = 20 - bulletnum;
				if (bulletstore - num < 0){
					bulletnum = bulletnum + bulletstore;
					bulletstore = 0;
				}
				else if(bulletstore - num > 0){
					bulletstore = bulletstore - num;
					bulletnum = 20;
				}
				else if (bulletstore - num === 0){
					bulletstore = 0;
					bulletnum = 20;
				}
				
				console.log('bullet: '+ bulletnum);
				console.log('Ammo: '+ bulletstore);
			}
		},this);
		
		if(gameWin){
			playerscoretime = timerscore;
		}
		
		
		
		
		this.input.keyboard.on('keyup_V',function(event){
			slime.health = 0;
			zombie.health = 0;
		});

		//pause play
		pause = this.add.image(760,40,'play').setScale(0.7).setScrollFactor(0);
		pause.setVisible(true);
		this.input.keyboard.on('keydown_Q', this.pausegame, this);
		
	}

	update(time, delta){
			if (gameOver)
				{
					this.physics.pause();
					timecont = false;
					playerscoretime = 0;
					if(this.key_enter.isDown){
						gameOver = false;
						this.scene.start("Home");
					}
					return;
					
				}
			if (gameWin)
				{
					timecont = false;
					playerscoretime = timerscore/10;
					gameWinimage.setVisible(true);
					gameWinmsg.setVisible(true);
					this.physics.pause();
					if(this.key_enter.isDown){
						
						$.get( "Admin/index.php?score="+ playerscoretime + "&level=1" , function( data ) {
						  console.log('logged ' + playerscoretime);
							 
						});
						this.scene.start("Home");
					}
					gameWin = false;
					return;
				}
		if (this.key_D.isDown && this.key_W.isDown)
		{
			kid.anims.play('right', true);
			kid.setVelocityX(180);
			kid.setVelocityY(-180);
			target.x+=3;
			target.y-=3;
			if (this.key_D.isUp)
			{
				kid.setVelocityY(-180);
				target.x+=3;
			}
			else if (this.key_W.isUp)
			{
				kid.setVelocityX(180);
				target.y-=3;
			}
		}
		else if (this.key_S.isDown && this.key_D.isDown)
		{
			kid.anims.play('right', true);
			kid.setVelocityX(180);
			kid.setVelocityY(180);
			target.x+=3;
			target.y+=3;
			if (this.key_D.isUp)
			{
				kid.setVelocityY(180);
				target.y+=3;
			}
			else if (this.key_S.isUp)
			{
				kid.setVelocityX(180);
				target.x+=3;
			}
		}
		else if (this.key_A.isDown && this.key_S.isDown)
		{
			kid.anims.play('left', true);
			kid.setVelocityX(-180);
			kid.setVelocityY(180);
			target.x-=3;
			target.y+=3;
			if (this.key_A.isUp)
			{
				kid.setVelocityY(180);
				target.y+=3;
			}
			else if (this.key_S.isUp)
			{
				kid.setVelocityX(-180);
				target.x-=3;
			}
		}
		else if (this.key_A.isDown && this.key_W.isDown)
		{
			kid.anims.play('left', true);
			kid.setVelocityX(-180);
			kid.setVelocityY(-180);
			target.x-=3;
			target.y-=3;
			if (this.key_A.isUp)
			{
				kid.setVelocityX(-180);
				target.x-=3;
			}
			else if (this.key_W.isUp)
			{
				kid.setVelocityY(-180);
				target.y-=3;
			}
		}
		else if (this.key_A.isDown)
		{
			kid.anims.play('left', true);
			kid.setVelocityX(-180);
			target.x-=3;
		}	
		else if (this.key_D.isDown)
		{
			kid.anims.play('right', true);
			kid.setVelocityX(180);
			target.x+=3;
		}	
		else if (this.key_S.isDown)
		{
			kid.anims.play('foward', true);
			kid.setVelocityY(180);
			target.y+=3;
		}	
		else if (this.key_W.isDown)
		{
			kid.anims.play('back', true);
			kid.setVelocityY(-180);
			target.y-=3;
		}
		else
		{
			kid.setVelocityX(0);
			kid.setVelocityY(0);
			kid.anims.play('turn');
		}

        //slime
		if(overlap){
			this.physics.moveToObject(slime, kid, 120);
			detect.setVisible(true);

		}
        detect.setVisible(false);
        
        //zombie
		if(overlaps){
			this.physics.moveToObject(zombie, kid, 120);
			detects.setVisible(true);

		}
        detects.setVisible(false);
        
		if (ammotaken){
			ammotaken = false;
			}
		if (healthtaken){
			healthtaken = false;
			}
		
		pause.setVisible(true);
		
		
		infotext.setText(bulletnum + ' / ' + bulletstore).setScrollFactor(0).setDepth(3);
		this.timeText.setText('Time: ' + timerscore/10).setScrollFactor(0).setDepth(1);

		gameWinmsg.setText(playerscoretime);

        //slime
		ehp1.x = slime.x +16;
		ehp1.y = slime.y +28;
		ehp2.x = slime.x +5;
		ehp2.y = slime.y +28;
		ehp3.x = slime.x -8;
		ehp3.y = slime.y +28;
		ehp4.x = slime.x;
		ehp4.y = slime.y +28;
		
        //zombie
		e1hp1.x = zombie.x +16;
		e1hp1.y = zombie.y +28;
		e1hp2.x = zombie.x +5;
		e1hp2.y = zombie.y +28;
		e1hp3.x = zombie.x -8;
		e1hp3.y = zombie.y +28;
		e1hp4.x = zombie.x;
		e1hp4.y = zombie.y +28;
        etarget5.x = zombie.x + 50;
        etarget5.y = zombie.y + 50;
        etarget6.x = zombie.x - 50;
        etarget6.y = zombie.y + 50;
        etarget7.x = zombie.x - 50;
        etarget7.y = zombie.y - 50;
        etarget8.x = zombie.x + 50;
        etarget8.y = zombie.y - 50;
        
		gun.x = kid.x;
		gun.y = kid.y;
		sword.x = kid.x;
		sword.y = kid.y;
		
		zone.x = kid.x;
        zone.y = kid.y;
		
		if(slime.visible === false && zombie.visible === false){
				gameWin = true;
				//console.log('win:' +gameWin);
				kid.anims.play('turn');
				kid.setActive(false);
				gun.setActive(false);
				target.setActive(false);
				//gameWinmsg.setVisible(true);
				//gameWinimage.setVisible(true);
			}


        //slime
		if(slime.health>0)
		{
			detect.x = slime.x + 30;
			detect.y = slime.y - 25;
		}
		else
		{
			detect.x = -100;
			detect.y = -100;
			slime.x = -100;
			slime.y = -100;
			detect.setActive(false).setVisible(false);
			
		}
        //zombie
		if(zombie.health>0)
		{
			detects.x = zombie.x + 25;
			detects.y = zombie.y - 20;
		}
		else
		{
			detects.x = -100;
			detects.y = -100;
			zombie.x = -100;
			zombie.y = -100;
			detects.setActive(false).setVisible(false);
			
		}
        
		if(gameOver === false && gameWin === false){
			gun.rotation = Phaser.Math.Angle.Between(kid.x, kid.y, target.x, target.y);
			sword.rotation = Phaser.Math.Angle.Between(kid.x, kid.y, target.x, target.y);

		}
	}
	
	enemyDamage(enemyHit, bulletHit)
	{
		// Reduce health of enemy
		if (bulletHit.active === true && enemyHit.active === true)
		{
			enemyHit.setTint(0xff0000);
			enemyHit.health = enemyHit.health - 1;
			console.log("Enemy hp: ", enemyHit.health);

			// Kill enemy if health <= 0
            //slime
			if(slime.health < 4){
				ehp1.setVisible(false);
			}
			if(slime.health < 3){
				ehp2.setVisible(false);
			}
			if(slime.health < 2){
				ehp3.setVisible(false);
			}
			if (slime.health <= 0)
			{
			    slime.setActive(false).setVisible(false);
				ehp4.setVisible(false);
			}
            //zombie
			if(zombie.health < 4){
				e1hp1.setVisible(false);
			}
			if(zombie.health < 3){
				e1hp2.setVisible(false);
			}
			if(zombie.health < 2){
				e1hp3.setVisible(false);
			}
			if (zombie.health <= 0)
			{
			    zombie.setActive(false).setVisible(false);
				e1hp4.setVisible(false);
				enemybullet.setActive(false).setVisible(false);
			}
            
			// Destroy bullet
			bulletHit.setActive(false).setVisible(false);
		}
	}
    
	playerDamage(playerHit, enemyHit)
	{
		if(playerHit.active === true && enemyHit.active === true)
			{
				playerHit.setTint(0xff0000);
				kid.health = kid.health - 1;
				console.log("Player hp: ", kid.health);
				if(kid.health < 5){
					hp5.setVisible(false);
				}
				if(kid.health < 4){
					hp4.setVisible(false);
				}
				if(kid.health < 3){
					hp3.setVisible(false);
				}
				if(kid.health < 2){
					hp2.setVisible(false);
				}
				if(kid.health <= 0){
					hp1.setVisible(false);
					kid.setTint(0xff0000);
					kid.anims.play('turn');
					kid.setActive(false);
					slime.setActive(false);
					zombie.setActive(false);
					gun.setActive(false);
					gameOvermsg.setVisible(true);
					gameOverimage.setVisible(true);
					
					gameOver = true;
					
				}
				
			}
	}
    
    boxCallback(enemyHit, enemybullet)
	{
        
	}
    
	playerbulletDamage(playerHit, enemybullet)
	{
		if(playerHit.active === true && enemybullet.active === true)
			{
				playerHit.setTint(0xff0000);
				kid.health = kid.health - 1;
				console.log("Player hp: ", kid.health);
				if(kid.health < 5){
					hp5.setVisible(false);
				}
				if(kid.health < 4){
					hp4.setVisible(false);
				}
				if(kid.health < 3){
					hp3.setVisible(false);
				}
				if(kid.health < 2){
					hp2.setVisible(false);
				}
				if(kid.health <= 0){
					hp1.setVisible(false);
					kid.setTint(0xff0000);
					kid.anims.play('turn');
					kid.setActive(false);
					slime.setActive(false);
					zombie.setActive(false);

					gun.setActive(false);
					gameOvermsg.setVisible(true);
					gameOverimage.setVisible(true);
					
					gameOver = true;
					
				}
				enemybullet.setActive(false).setVisible(false);
			}
	}
	
	
	swordDamage(player , enemyHit){
		if (kid.active === true && slime.active === true && sword.active === true && clickss === true)
		{
			enemyHit.setTint(0xff0000);
			enemyHit.health = enemyHit.health - 1;
			console.log("Enemy hp: ", enemyHit.health);

			// Kill enemy if health <= 0
			if(enemyHit.health < 4){
				ehp1.setVisible(false);
			}
			if(enemyHit.health < 3){
				ehp2.setVisible(false);
			}
			if(enemyHit.health < 2){
				ehp3.setVisible(false);
			}
			if (enemyHit.health <= 0)
			{
			    enemyHit.setActive(false).setVisible(false);
				ehp4.setVisible(false);
				
			}
			clickss = false;
	}
	
	} 	
	spawnAmmoBox(ammo){
			var children = ammo.getChildren();
			
			for (var i = 0; i < children.length; i++)
			{
				var x = Phaser.Math.Between(0, 1100);
				var y = Phaser.Math.Between(400, 620);
				children[i].setPosition(x, y);
			}
			
			ammo.refresh();
		this.physics.add.overlap(kid, ammo, this.ammorecover);
		
	}
	spawnHealthBox(healthpack){
		
		var children = healthpack.getChildren();
			
			for (var i = 0; i < children.length; i++)
			{
				var x = Phaser.Math.Between(0, 1100);
				var y = Phaser.Math.Between(400, 620);
				children[i].setPosition(x, y);
			}
			
			healthpack.refresh();
		this.physics.add.overlap(kid, healthpack, this.healthrecover);
		
	}
	ammorecover(player, gunammo){
		bulletstore = bulletstore + 15;
		console.log('Bullet Stored: ' + bulletstore);
		ammo.killAndHide(gunammo);
		gunammo.body.enable = false;
		ammotaken = true;
		
		}
	healthrecover(player,pack){
		kid.health = 5;
		
		console.log("Player hp: ", kid.health);
			hp5.setVisible(true);
			hp4.setVisible(true);
			hp3.setVisible(true);
			hp2.setVisible(true);
			hp1.setVisible(true);
		
		
		healthpack.killAndHide(pack);
		pack.body.enable = false;
		healthtaken = true;
	}
	onEvent(){
		kid.setTint();
		slime.setTint();
		zombie.setTint();
		if(overlaps && gameOver === false && zombie.active === true){
		enemybullet = ebullets.get().setActive(true).setVisible(true);
        enemybullet6 = ebullets6.get().setActive(true).setVisible(true);
        enemybullet7 = ebullets7.get().setActive(true).setVisible(true);
        enemybullet8 = ebullets8.get().setActive(true).setVisible(true);
        enemybullet9 = ebullets9.get().setActive(true).setVisible(true);
			if (enemybullet)
			{
				enemybullet.fire(zombie, kid);
				enemybullet6.fire(zombie, etarget5);
				enemybullet7.fire(zombie, etarget6);
				enemybullet8.fire(zombie, etarget7);
				enemybullet9.fire(zombie, etarget8);

				this.physics.add.collider(kid, enemybullet, this.playerbulletDamage);
				this.physics.add.collider(kid, enemybullet6, this.playerbulletDamage);
				this.physics.add.collider(kid, enemybullet7, this.playerbulletDamage);
				this.physics.add.collider(kid, enemybullet8, this.playerbulletDamage);
				this.physics.add.collider(kid, enemybullet9, this.playerbulletDamage);
                

				
			}
		
		}

		
	}
	randommovement(){
		if(gameOver === false){
			slime.setVelocity(Phaser.Math.Between(100, 200), Phaser.Math.Between(100, 200));
			zombie.setVelocity(Phaser.Math.Between(100, 300), Phaser.Math.Between(100, 250));
		}
	}
	timer(){
		
		if(gameOver === false && gameWin === false && timecont === true){
			timerscore = timerscore + 1;
		}
		
		
	}
	pausegame(){
        if(gameWin === false && gameOver === false){
		console.log('pause');
		pause.setVisible(false);
		kid.setVelocityX(0);
		kid.setVelocityY(0);
		kid.anims.play('turn');

		this.scene.launch('PauseScreen4');
		this.scene.pause();
        }
		
		}
}