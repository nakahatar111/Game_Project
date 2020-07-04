class Game1 extends Phaser.Scene{
	constructor(){
		super({key:"Game1"});
	}
	
	preload(){
		
		this.load.image('bg3','visual/gamemap3.png');
		this.load.image('gun', 'visual/gun.png');
		this.load.image('target', 'visual/target.png');
		this.load.image('slime', 'visual/slime.png');
		this.load.image('zombie','visual/enemy1.png');
        this.load.image('zombie1','visual/enemy3.png');
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
		this.load.image('enemybullet','visual/enemybullet.png');
        this.load.image('enemybulletred','visual/enemybulletred.png');
		this.load.image('hp','visual/hp.png');
		this.load.image('arrow','visual/arrow.png');
        this.load.image('winimage', 'visual/win.png');
        this.load.image('boss', 'visual/uriel.png');
        this.load.image('bossbullet', 'visual/urielsword.png');
        this.load.image('circle', 'visual/magiccircle.png');
        this.load.image('enemy_target','visual/transbox.png');
        //this.load.image('enemy_target','visual/bluebox.png');
		this.load.image('healthpack','visual/healthpack.png');
        this.load.image('bosssword1','visual/sword/urielsword1.png');
        this.load.image('bosssword2','visual/sword/urielsword2.png');
        this.load.image('bosssword3','visual/sword/urielsword3.png');
        this.load.image('bosssword4','visual/sword/urielsword4.png');
        this.load.image('bosssword5','visual/sword/urielsword5.png');
        this.load.image('bosssword6','visual/sword/urielsword6.png');
        this.load.image('bosssword7','visual/sword/urielsword7.png');
        this.load.image('bosssword8','visual/sword/urielsword8.png');
		this.load.spritesheet('character','visual/sprites-character.png', 
							  { frameWidth: 80, frameHeight: 120 });
        
        

	}
	
	create(){
        death = false;
        //enter = this.add.image(625,370, 'sidebox').setDepth(2).setScale(0.6);
        enter = this.physics.add.staticGroup();
		enter.create(625,340, 'sidebox').setScale(0.6).setDepth(2).refreshBody();
        exit = this.physics.add.staticGroup();
		exit.create(2450,370, 'sidebox').setScale(0.6).setDepth(2).refreshBody();
        etarget1 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        etarget2 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        etarget3 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        etarget4 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        etarget5 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        etarget6 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        etarget7 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        etarget8 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        
        e2target1 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        e2target2 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        e2target3 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        e2target4 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        e2target5 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        e2target6 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        e2target7 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        e2target8 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        
        bosstarget1 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        bosstarget2 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        bosstarget3 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        bosstarget4 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        bosstarget5 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        bosstarget6 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        bosstarget7 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        bosstarget8 = this.add.image( -400, 300, 'enemy_target').setDepth(5).setScale(0.1);
        
        
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
			classType: EBullet,
			allowGravity: false,
			runChildUpdate: true,
		});
        ebullets2 = this.physics.add.group({
			classType: EBullet2,
			allowGravity: false,
			runChildUpdate: true,
		});
        ebullets3 = this.physics.add.group({
			classType: EBullet3,
			allowGravity: false,
			runChildUpdate: true,
		});
        ebullets4 = this.physics.add.group({
			classType: EBullet4,
			allowGravity: false,
			runChildUpdate: true,
		});
        ebullets5 = this.physics.add.group({
			classType: EBullet5,
			allowGravity: false,
			runChildUpdate: true,
		});
        ebullets6 = this.physics.add.group({
			classType: EBullet6,
			allowGravity: false,
			runChildUpdate: true,
		});
        ebullets7 = this.physics.add.group({
			classType: EBullet7,
			allowGravity: false,
			runChildUpdate: true,
		});
        ebullets8 = this.physics.add.group({
			classType: EBullet8,
			allowGravity: false,
			runChildUpdate: true,
		});
        ebullets9 = this.physics.add.group({
			classType: EBullet9,
			allowGravity: false,
			runChildUpdate: true,
		});
		
        //zombie2
        e2bullets = this.physics.add.group({
			classType: E2Bullet,
			allowGravity: false,
			runChildUpdate: true,
		});
        e2bullets2 = this.physics.add.group({
			classType: E2Bullet2,
			allowGravity: false,
			runChildUpdate: true,
		});
        e2bullets3 = this.physics.add.group({
			classType: E2Bullet3,
			allowGravity: false,
			runChildUpdate: true,
		});
        e2bullets4 = this.physics.add.group({
			classType: E2Bullet4,
			allowGravity: false,
			runChildUpdate: true,
		});
        e2bullets5 = this.physics.add.group({
			classType: E2Bullet5,
			allowGravity: false,
			runChildUpdate: true,
		});
        e2bullets6 = this.physics.add.group({
			classType: E2Bullet6,
			allowGravity: false,
			runChildUpdate: true,
		});
        e2bullets7 = this.physics.add.group({
			classType: E2Bullet7,
			allowGravity: false,
			runChildUpdate: true,
		});
        e2bullets8 = this.physics.add.group({
			classType: E2Bullet8,
			allowGravity: false,
			runChildUpdate: true,
		});
        e2bullets9 = this.physics.add.group({
			classType: E2Bullet9,
			allowGravity: false,
			runChildUpdate: true,
		});
        
        //boss
        ebbullets = this.physics.add.group({
			classType: EbBullet,
			allowGravity: false,
			runChildUpdate: true,
		});
        ebbullets2 = this.physics.add.group({
			classType: EbBullet2,
			allowGravity: false,
			runChildUpdate: true,
		});
        ebbullets3 = this.physics.add.group({
			classType: EbBullet3,
			allowGravity: false,
			runChildUpdate: true,
		});
        ebbullets4 = this.physics.add.group({
			classType: EbBullet4,
			allowGravity: false,
			runChildUpdate: true,
		});
        ebbullets5 = this.physics.add.group({
			classType: EbBullet5,
			allowGravity: false,
			runChildUpdate: true,
		});
        ebbullets6 = this.physics.add.group({
			classType: EbBullet6,
			allowGravity: false,
			runChildUpdate: true,
		});
        ebbullets7 = this.physics.add.group({
			classType: EbBullet7,
			allowGravity: false,
			runChildUpdate: true,
		});
        ebbullets8 = this.physics.add.group({
			classType: EbBullet8,
			allowGravity: false,
			runChildUpdate: true,
		});
        ebbullets9 = this.physics.add.group({
			classType: EbBullet9,
			allowGravity: false,
			runChildUpdate: true,
		});
        
        
        
		this.timeText = this.add.text(630, 20,'', {font: '25px Roboto'});
		//bg image
		this.back = this.add.image(0, 0, 'bg3').setScale(2).setOrigin(0, 0);

		//map
		this.cameras.main.setBounds(0, 0, 3070, 2040);
		this.minimap = this.cameras.add(550, 10000, 250, 150).setZoom(0.5);
		this.minimap.setBounds(0, 0, 1180, 680);
		this.physics.world.setBounds(0, 0, 3070, 2040, true, true, true, true);
		
		//bullet
		this.add.image(775,560,'bulleticon').setScale(0.15).setScrollFactor(0).setDepth(2);
        
        //arrow
        arrow = this.add.image(620,500,'arrow').setScale(0.2).setDepth(0);
		arrow.setVisible(false);
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
		target.setScale(0.05);
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
        //zombie2
        e2hp1 = this.add.image(-100,-100, 'healthbar').setScale(0.06);
		e2hp2 = this.add.image(-100,-100, 'healthbar').setScale(0.06);
		e2hp3 = this.add.image(-100,-100, 'healthbar').setScale(0.06);
		e2hp4 = this.add.image(-100,-100, 'health').setScale(0.05);
		
		hp1 = this.add.image(40,40,'hp').setScale(0.06).setScrollFactor(0).setDepth(5);
		hp2 = this.add.image(80,40,'hp').setScale(0.06).setScrollFactor(0).setDepth(5);
		hp3 = this.add.image(120,40,'hp').setScale(0.06).setScrollFactor(0).setDepth(5);
		hp4 = this.add.image(160,40,'hp').setScale(0.06).setScrollFactor(0).setDepth(5);
		hp5 = this.add.image(200,40,'hp').setScale(0.06).setScrollFactor(0).setDepth(5);
		
		//building/nature border
		box = this.physics.add.staticGroup();
		area = this.physics.add.staticGroup();
		//house1
		//area.create(0,0, 'area').setScale(1).refreshBody();
		area.create(630,320, 'area').setScale(0.7).refreshBody();
		area.create(100,250, 'area').setScale(0.6).refreshBody();
		area.create(0,300, 'area').setScale(1).refreshBody();
		area.create(0,400, 'area').setScale(1).refreshBody();
		area.create(-80,500, 'area').setScale(1).refreshBody();
		area.create(40,750, 'area').setScale(1).refreshBody();
		area.create(60,800, 'area').setScale(1).refreshBody();
		area.create(200,900, 'area').setScale(1).refreshBody();
		area.create(250,800, 'area').setScale(0.5).refreshBody();
		area.create(280,800, 'area').setScale(0.5).refreshBody();
		area.create(380,770, 'area').setScale(0.5).refreshBody();
		area.create(350,820, 'area').setScale(0.5).refreshBody();
		area.create(540,760, 'area').setScale(1).refreshBody();
		area.create(660,760, 'area').setScale(1).refreshBody();
		
		area.create(790,560, 'area').setScale(0.4).refreshBody();
		area.create(180,960, 'area').setScale(1).refreshBody();
		area.create(150,1060, 'area').setScale(1).refreshBody();
		area.create(120,1160, 'area').setScale(1).refreshBody();
		area.create(120,1260, 'area').setScale(1).refreshBody();
		area.create(50,1500, 'area').setScale(1).refreshBody();
		area.create(50,1860, 'area').setScale(1).refreshBody();
		area.create(50,1660, 'area').setScale(1).refreshBody();

        area.create(200,1950, 'area').setScale(1).refreshBody();
        area.create(140,1880, 'area').setScale(1).refreshBody();
        area.create(400,1950, 'area').setScale(1).refreshBody();
        area.create(600,1950, 'area').setScale(1).refreshBody();
        area.create(800,1950, 'area').setScale(1).refreshBody();
        area.create(1000,1950, 'area').setScale(1).refreshBody();
        area.create(1200,1950, 'area').setScale(1).refreshBody();
        area.create(1400,1950, 'area').setScale(1).refreshBody();
        area.create(1600,1950, 'area').setScale(1).refreshBody();
        area.create(1800,1950, 'area').setScale(1).refreshBody();
        area.create(2000,1950, 'area').setScale(1).refreshBody();
        area.create(2200,1950, 'area').setScale(1).refreshBody();
        area.create(2400,1950, 'area').setScale(1).refreshBody();
        area.create(2600,1950, 'area').setScale(1).refreshBody();
        area.create(2800,1950, 'area').setScale(1).refreshBody();
		
        area.create(1430,0, 'area').setScale(1.6).refreshBody();
        area.create(1450,200, 'area').setScale(2).refreshBody();
        area.create(1500,400, 'area').setScale(1).refreshBody();
        area.create(1500,500, 'area').setScale(1).refreshBody();
        area.create(1500,600, 'area').setScale(2).refreshBody();
        area.create(1520,800, 'area').setScale(1.7).refreshBody();
        area.create(1500,1000, 'area').setScale(1.5).refreshBody();
        area.create(1500,1200, 'area').setScale(1.5).refreshBody();
        area.create(1500,1600, 'area').setScale(2.5).refreshBody();
        area.create(1800,1400, 'area').setScale(0.7).refreshBody();
        area.create(2440,350, 'area').setScale(0.7).refreshBody();
        area.create(3200,760, 'area').setScale(1.8).refreshBody();
        area.create(3200,960, 'area').setScale(1.8).refreshBody();
        
        area.create(2900,1800, 'area').setScale(1.8).refreshBody();
        area.create(2900,2000, 'area').setScale(1.8).refreshBody();
        area.create(3050,1700, 'area').setScale(1.8).refreshBody();
        area.create(2550,1960, 'area').setScale(1.8).refreshBody();
        area.create(2350,1990, 'area').setScale(1.8).refreshBody();
       
        area.create(950,70, 'area').setScale(0.4).refreshBody();
        area.create(2200,100, 'area').setScale(0.4).refreshBody();
        area.create(2600,280, 'area').setScale(0.4).refreshBody();
        area.create(2670,650, 'area').setScale(0.4).refreshBody();
        area.create(2150,780, 'area').setScale(0.4).refreshBody();
        area.create(2420,1210, 'area').setScale(0.4).refreshBody();
        area.create(2800,1200, 'area').setScale(0.4).refreshBody();
        area.create(2670,1400, 'area').setScale(0.4).refreshBody();
        area.create(2320,1610, 'area').setScale(0.4).refreshBody();
        area.create(2540,1610, 'area').setScale(0.4).refreshBody();
        area.create(1850,1810, 'area').setScale(0.4).refreshBody();
        
        area.create(770,1740, 'area').setScale(0.7).refreshBody();
        area.create(890,1810, 'area').setScale(0.7).refreshBody();
        area.create(950,1810, 'area').setScale(0.7).refreshBody();
        area.create(1130,1910, 'area').setScale(1).refreshBody();
      
		//gun info text
		infotext = this.add.text(660, 550, '', {font: '35px Roboto'});
		
		//main character
		kid = this.physics.add.sprite(400,410, 'character').setDepth(1);
		kid.body.setAllowGravity(false);
		kid.setScale(0.55);
		kid.setBounce(0.2);
		kid.setCollideWorldBounds(true);
		kid.health = 5;
		
		//ammo
		ammo = this.physics.add.staticGroup({
				key: 'ammo',
				frameQuantity: 5,
				allowGravity: false,
				immovable: true
			});
		this.spawnAmmoBox(ammo);
		
		//healthpack
		healthpack = this.physics.add.staticGroup({
				key: 'healthpack',
				frameQuantity: 6,
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
		var spawn = Phaser.Math.Between(1, 2);
		if(spawn === 1)
		{
			slime = this.physics.add.sprite(900,800,'slime');
			zombie = this.physics.add.sprite(830,1300,'zombie');
            zombie1 = this.physics.add.sprite(400,1430,'zombie1');
		}
		else if(spawn === 2)
		{
			slime = this.physics.add.sprite(900,800,'slime');
			zombie = this.physics.add.sprite(830,1200,'zombie');
            zombie1 = this.physics.add.sprite(400,1000,'zombie1');
		}
		
		slime.body.setAllowGravity(false);
		//slime.body.setVelocity(100, 60);
		slime.setScale(0.4);
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
		zombie.setScale(0.7);
		zombie.body.setBounce(1,1);
		zombie.setCollideWorldBounds(true);
		zombie.setSize(100,100);
		zombie.health = 4;
		detects = this.add.image(200,200,'detect').setScale(0.07);
		detects.setVisible(false);
		this.physics.add.collider(kid, zombie);
		
        //enemy3		
		zombie1.body.setAllowGravity(false);
		zombie1.body.setVelocity(100, 60);
		zombie1.setScale(0.7);
		zombie1.body.setBounce(1,1);
		zombie1.setCollideWorldBounds(true);
		zombie1.setSize(100,100);
		zombie1.health = 4;
		detectss = this.add.image(200,200,'detect').setScale(0.07);
		detectss.setVisible(false);
		this.physics.add.collider(kid, zombie1);
        
        //boss
        bosscircle = this.physics.add.sprite(2200,700,'circle');
        bosscircle.body.setAllowGravity(false);
        bosscircle.setScale(0.9).setDepth(0);
        bosscircle.setVisible(false);
        
        boss = this.physics.add.sprite(2200,700,'boss');
        boss.body.setAllowGravity(false);
		boss.body.setVelocity(60, 50);
		boss.setScale(0.75).setDepth(2);
		boss.body.setBounce(1,1);
		boss.setCollideWorldBounds(true);
		//boss.setSize(300,100);
		boss.health = 15;
		this.physics.add.collider(kid, boss);
		
		
		//collide with house
		this.physics.add.collider(kid, box);
		this.physics.add.collider(slime, box);
        
		this.physics.add.collider(zombie, box);
		this.physics.add.collider(zombie, slime);
        this.physics.add.collider(zombie1, box);
		this.physics.add.collider(zombie1, slime);
        this.physics.add.collider(zombie1, zombie);
        this.physics.add.collider(boss, area);

		//collide with area
		this.physics.add.collider(kid, area);
		this.physics.add.collider(slime, area);
		this.physics.add.collider(zombie, area);
        this.physics.add.collider(zombie1, area);

		
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
        
		//zombie2
		this.input.on('gameobjectover', function (zombie1, dropZone) {
			overlapss = true;
		});

		this.input.on('gameobjectout', function (zombie1, dropZone) {
			overlapss = false;
		});	
        
        //boss
		this.input.on('gameobjectover', function (boss, dropZone) {
			overlapsss = true;
		});

		this.input.on('gameobjectout', function (boss, dropZone) {
			overlapsss = false;
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
                    this.physics.add.overlap(sword, zombie1, this.swordDamage);    
                    this.physics.add.overlap(sword, boss, this.swordDamage);    

					}
					clicks = false;
					overlap = true;
					overlaps = true;
					overlapss = true;
                    overlapsss = true;
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
                this.physics.add.collider(zombie1, bullet, this.enemyDamage);
                this.physics.add.collider(boss, bullet, this.enemyDamage);
			
			}
			overlap = true;
			overlaps = true;
			overlapss = true;
            overlapsss = true;
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
                zombie1.setTint();
                boss.setTint();
    	});
		
		this.physics.add.collider(kid, slime, this.playerDamage);
		this.physics.add.collider(kid, zombie, this.playerDamage);
        this.physics.add.collider(kid, zombie1, this.playerDamage);
        this.physics.add.collider(kid, boss, this.playerDamage);

		
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
			//console.log(playerscoretime);
		}

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
					//console.log('Score : '+ playerscoretime);
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
					//console.log('Score : '+ playerscoretime);
					gameWinimage.setVisible(true);
					gameWinmsg.setVisible(true);
					this.physics.pause();
					if(this.key_enter.isDown){
						
						$.get( "Admin/index.php?score="+ playerscoretime + "&level=4" , function( data ) {
						  console.log('logged ' + playerscoretime);
							 
						});
						this.scene.start("Home");
					}
					gameWin = false;
					return;
				}
        if(death){
            death = false;
            console.log('death');
            arrow.setVisible(true);
		this.physics.add.collider(kid, enter, function(kid){
								 kid.x = 2450;
                                 kid.y = 510;
                                 target.x = kid.x;
					             target.y = kid.y;
        },null, this);
        
        this.physics.add.collider(kid, exit, function(kid){
								 kid.x = 620;
                                 kid.y = 490;
                                 target.x = kid.x;
                                 target.y = kid.y;
        },null, this);
        }
        else
        {
            overlapsss = false;
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
        
        //zombie1
        if(overlapss){
			this.physics.moveToObject(zombie1, kid, 120);
			detectss.setVisible(true);

		}
		detectss.setVisible(false);
        
        if(overlapsss){
			this.physics.moveToObject(boss, kid, 120);

		}
        
		if (ammotaken){
			ammotaken = false;
			//this.spawnAmmoBox(ammo);
			}
		if (healthtaken){
			healthtaken = false;
			//this.spawnHealthBox(healthpack);
			}
		
		pause.setVisible(true);
		
		
		infotext.setText(bulletnum + ' / ' + bulletstore).setScrollFactor(0).setDepth(3);
		this.timeText.setText('Time: ' + timerscore/10).setScrollFactor(0).setDepth(1);

		gameWinmsg.setText(playerscoretime);
        
        //boss
        bosscircle.x = boss.x;
        bosscircle.y = boss.y;

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
		e1hp1.y = zombie.y +39;
		e1hp2.x = zombie.x +5;
		e1hp2.y = zombie.y +39;
		e1hp3.x = zombie.x -8;
		e1hp3.y = zombie.y +39;
		e1hp4.x = zombie.x;
		e1hp4.y = zombie.y +39;
		etarget1.x = zombie.x;
        etarget1.y = zombie.y + 50;
        etarget2.x = zombie.x + 50;
        etarget2.y = zombie.y;
        etarget3.x = zombie.x;
        etarget3.y = zombie.y - 50;
        etarget4.x = zombie.x - 50;
        etarget4.y = zombie.y;
        etarget5.x = zombie.x + 50;
        etarget5.y = zombie.y + 50;
        etarget6.x = zombie.x - 50;
        etarget6.y = zombie.y + 50;
        etarget7.x = zombie.x - 50;
        etarget7.y = zombie.y - 50;
        etarget8.x = zombie.x + 50;
        etarget8.y = zombie.y - 50;
        
        //zombie2
		e2hp1.x = zombie1.x +16;
		e2hp1.y = zombie1.y +39;
		e2hp2.x = zombie1.x +5;
		e2hp2.y = zombie1.y +39;
		e2hp3.x = zombie1.x -8;
		e2hp3.y = zombie1.y +39;
		e2hp4.x = zombie1.x;
		e2hp4.y = zombie1.y +39;
		e2target1.x = zombie1.x;
        e2target1.y = zombie1.y + 50;
        e2target2.x = zombie1.x + 50;
        e2target2.y = zombie1.y;
        e2target3.x = zombie1.x;
        e2target3.y = zombie1.y - 50;
        e2target4.x = zombie1.x - 50;
        e2target4.y = zombie1.y;
        e2target5.x = zombie1.x + 50;
        e2target5.y = zombie1.y + 50;
        e2target6.x = zombie1.x - 50;
        e2target6.y = zombie1.y + 50;
        e2target7.x = zombie1.x - 50;
        e2target7.y = zombie1.y - 50;
        e2target8.x = zombie1.x + 50;
        e2target8.y = zombie1.y - 50;

        
        //boss
        bosstarget1.x = boss.x + 150;
        bosstarget1.y = boss.y;
        bosstarget2.x = boss.x - 150;
        bosstarget2.y = boss.y;
        bosstarget3.x = boss.x;
        bosstarget3.y = boss.y + 150;
        bosstarget4.x = boss.x;
        bosstarget4.y = boss.y - 150;
        bosstarget5.x = boss.x - 150;
        bosstarget5.y = boss.y - 150;
        bosstarget6.x = boss.x + 150;
        bosstarget6.y = boss.y + 150;
        bosstarget7.x = boss.x - 150;
        bosstarget7.y = boss.y + 150;
        bosstarget8.x = boss.x + 150;
        bosstarget8.y = boss.y - 150;
        
        
		gun.x = kid.x;
		gun.y = kid.y;
		sword.x = kid.x;
		sword.y = kid.y;
		
		zone.x = kid.x;
        zone.y = kid.y;
		
		if(slime.visible === false && zombie.visible === false && zombie1.visible === false){
				death = true;
			}
        
        if(boss.visible === false){
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
        //zombie2
        if(zombie1.health>0)
		{
			detectss.x = zombie1.x + 25;
			detectss.y = zombie1.y - 20;
		}
		else
		{
			detectss.x = -100;
			detectss.y = -100;
			zombie1.x = -100;
			zombie1.y = -100;
			detects.setActive(false).setVisible(false);
			
		}
        
        
		if(gameOver === false && gameWin === false){
			gun.rotation = Phaser.Math.Angle.Between(kid.x, kid.y, target.x, target.y);
			sword.rotation = Phaser.Math.Angle.Between(kid.x, kid.y, target.x, target.y);
            
			//etarget1.rotation = Phaser.Math.Angle.Between(zombie.x, zombie.y, kid.x, kid.y);

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
            
            //zombie2
            if(zombie1.health < 4){
				e2hp1.setVisible(false);
			}
			if(zombie1.health < 3){
				e2hp2.setVisible(false);
			}
			if(zombie1.health < 2){
				e2hp3.setVisible(false);
			}
			if (zombie1.health <= 0)
			{
			    zombie1.setActive(false).setVisible(false);
				e2hp4.setVisible(false);
				enemy2bullet.setActive(false).setVisible(false);
			}
            
            //boss
			if (boss.health <= 0)
			{
			    boss.setActive(false).setVisible(false);
				benemybullet.setActive(false).setVisible(false);
			}

			// Destroy bullet
			bulletHit.setActive(false).setVisible(false);
		}
	}
	
	boxCallback(boxHit, bulletHit)
	{
		if (bulletHit.active === true && boxHit.active === true)
		{
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
                    zombie1.setActive(false);
                    boss.setActive(false);
					gun.setActive(false);
					gameOvermsg.setVisible(true);
					gameOverimage.setVisible(true);
					
					gameOver = true;
					
				}
				
			}
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
                    zombie1.setActive(false);
                    boss.setActive(false);
                    bosscircle.setVisible(false);

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
				var x = Phaser.Math.Between(20, 900);
				var y = Phaser.Math.Between(300, 1100);
				children[i].setPosition(x, y);
			}
			
			ammo.refresh();
		this.physics.add.overlap(kid, ammo, this.ammorecover);
		
	}
	spawnHealthBox(healthpack){
		
		var children = healthpack.getChildren();
			
			for (var i = 0; i < children.length; i++)
			{
				var x = Phaser.Math.Between(20, 900);
				var y = Phaser.Math.Between(300, 1100);
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
        zombie1.setTint();
        boss.setTint();
		if(overlaps && gameOver === false && zombie.active === true){
		enemybullet = ebullets.get().setActive(true).setVisible(true);
        enemybullet2 = ebullets2.get().setActive(true).setVisible(true);
        enemybullet3 = ebullets3.get().setActive(true).setVisible(true);
        enemybullet4 = ebullets4.get().setActive(true).setVisible(true);
        enemybullet5 = ebullets5.get().setActive(true).setVisible(true);
        enemybullet6 = ebullets6.get().setActive(true).setVisible(true);
        enemybullet7 = ebullets7.get().setActive(true).setVisible(true);
        enemybullet8 = ebullets8.get().setActive(true).setVisible(true);
        enemybullet9 = ebullets9.get().setActive(true).setVisible(true);
			if (enemybullet)
			{
				//console.log('fire');
				enemybullet.fire(zombie, kid);
				enemybullet2.fire(zombie, etarget1);
				enemybullet3.fire(zombie, etarget2);
				enemybullet4.fire(zombie, etarget3);
				enemybullet5.fire(zombie, etarget4);
				enemybullet6.fire(zombie, etarget5);
				enemybullet7.fire(zombie, etarget6);
				enemybullet8.fire(zombie, etarget7);
				enemybullet9.fire(zombie, etarget8);
                
                enemybullet.rotation = Phaser.Math.Angle.Between(boss.x, boss.y, kid.x, kid.y);


				this.physics.add.collider(kid, enemybullet, this.playerbulletDamage);
				this.physics.add.collider(kid, enemybullet2, this.playerbulletDamage);
				this.physics.add.collider(kid, enemybullet3, this.playerbulletDamage);
				this.physics.add.collider(kid, enemybullet4, this.playerbulletDamage);
				this.physics.add.collider(kid, enemybullet5, this.playerbulletDamage);
				this.physics.add.collider(kid, enemybullet6, this.playerbulletDamage);
				this.physics.add.collider(kid, enemybullet7, this.playerbulletDamage);
				this.physics.add.collider(kid, enemybullet8, this.playerbulletDamage);
				this.physics.add.collider(kid, enemybullet9, this.playerbulletDamage);
				
			}
		
		}
        
        if(overlapss && gameOver === false && zombie1.active === true){
            
		enemy2bullet = e2bullets.get().setActive(true).setVisible(true);
        enemy2bullet2 = e2bullets2.get().setActive(true).setVisible(true);
        enemy2bullet3 = e2bullets3.get().setActive(true).setVisible(true);
        enemy2bullet4 = e2bullets4.get().setActive(true).setVisible(true);
        enemy2bullet5 = e2bullets5.get().setActive(true).setVisible(true);
        enemy2bullet6 = e2bullets6.get().setActive(true).setVisible(true);
        enemy2bullet7 = e2bullets7.get().setActive(true).setVisible(true);
        enemy2bullet8 = e2bullets8.get().setActive(true).setVisible(true);
        enemy2bullet9 = e2bullets9.get().setActive(true).setVisible(true);
			if (enemy2bullet)
			{
				//console.log('fire');
				enemy2bullet.fire(zombie1, kid);
				enemy2bullet2.fire(zombie1, e2target1);
				enemy2bullet3.fire(zombie1, e2target2);
				enemy2bullet4.fire(zombie1, e2target3);
				enemy2bullet5.fire(zombie1, e2target4);
				enemy2bullet6.fire(zombie1, e2target5);
				enemy2bullet7.fire(zombie1, e2target6);
				enemy2bullet8.fire(zombie1, e2target7);
				enemy2bullet9.fire(zombie1, e2target8);
                

				this.physics.add.collider(kid, enemy2bullet, this.playerbulletDamage);
				this.physics.add.collider(kid, enemy2bullet2, this.playerbulletDamage);
				this.physics.add.collider(kid, enemy2bullet3, this.playerbulletDamage);
				this.physics.add.collider(kid, enemy2bullet4, this.playerbulletDamage);
				this.physics.add.collider(kid, enemy2bullet5, this.playerbulletDamage);
				this.physics.add.collider(kid, enemy2bullet6, this.playerbulletDamage);
				this.physics.add.collider(kid, enemy2bullet7, this.playerbulletDamage);
				this.physics.add.collider(kid, enemy2bullet8, this.playerbulletDamage);
				this.physics.add.collider(kid, enemy2bullet9, this.playerbulletDamage);
				
			}
		
		}
        
        if(overlapsss && gameOver === false && boss.active === true){
            bosscircle.setVisible(true);
		benemybullet = ebbullets.get().setActive(true).setVisible(true);
        benemybullet2 = ebbullets2.get().setActive(true).setVisible(true);
        benemybullet3 = ebbullets3.get().setActive(true).setVisible(true);
        benemybullet4 = ebbullets4.get().setActive(true).setVisible(true);
        benemybullet5 = ebbullets5.get().setActive(true).setVisible(true);
        benemybullet6 = ebbullets6.get().setActive(true).setVisible(true);
        benemybullet7 = ebbullets7.get().setActive(true).setVisible(true);
        benemybullet8 = ebbullets8.get().setActive(true).setVisible(true);
        benemybullet9 = ebbullets9.get().setActive(true).setVisible(true);
			if (benemybullet)
			{
				//console.log('fire');
				benemybullet.fire(boss, kid);
				benemybullet2.fire(boss, bosstarget1);
				benemybullet3.fire(boss, bosstarget2);
				benemybullet4.fire(boss, bosstarget3);
				benemybullet5.fire(boss, bosstarget4);
				benemybullet6.fire(boss, bosstarget5);
				benemybullet7.fire(boss, bosstarget6);
				benemybullet8.fire(boss, bosstarget7);
				benemybullet9.fire(boss, bosstarget8);
                

				this.physics.add.collider(kid, benemybullet, this.playerbulletDamage);
				this.physics.add.collider(kid, benemybullet2, this.playerbulletDamage);
				this.physics.add.collider(kid, benemybullet3, this.playerbulletDamage);
				this.physics.add.collider(kid, benemybullet4, this.playerbulletDamage);
				this.physics.add.collider(kid, benemybullet5, this.playerbulletDamage);
				this.physics.add.collider(kid, benemybullet6, this.playerbulletDamage);
				this.physics.add.collider(kid, benemybullet7, this.playerbulletDamage);
				this.physics.add.collider(kid, benemybullet8, this.playerbulletDamage);
				this.physics.add.collider(kid, benemybullet9, this.playerbulletDamage);
				
			}
		
		}
		
	}
	randommovement(){
		if(gameOver === false){
			slime.setVelocity(Phaser.Math.Between(100, 200), Phaser.Math.Between(100, 200));
			zombie.setVelocity(Phaser.Math.Between(100, 300), Phaser.Math.Between(100, 250));
            zombie1.setVelocity(Phaser.Math.Between(100, 300), Phaser.Math.Between(100, 250));

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

		this.scene.launch('PauseScreen1');
		this.scene.pause();
        }
		
		}
}