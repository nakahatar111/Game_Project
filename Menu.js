class Menu extends Phaser.Scene{
	constructor(){
		super({key:"Menu"});
	}
	
	preload(){
		this.load.image('blurhome', 'visual/blurryhome.png');
		this.load.image('cursor', 'visual/cursor.png');
		this.load.image('back', 'visual/Buttons/Backward_BTN.png');
		this.load.image('leaderboard', 'visual/Buttons/Window.png');
		this.load.image('question', 'visual/Buttons/FAQ_BTN.png');
		this.load.image('replay', 'visual/Buttons/Replay_BTN.png');
		this.load.image('rating', 'visual/Buttons/Rating_BTN.png');
        this.load.image('number1', 'visual/Buttons/number1.png');
        this.load.image('number2', 'visual/Buttons/number2.png');
        this.load.image('number3', 'visual/Buttons/number3.png');
        this.load.image('number4', 'visual/Buttons/number4.png');
		this.load.image('clickbox','visual/transbox.png');
		this.load.image('hide','visual/hide.png');
        this.load.image('help1','visual/help1.png');

		//this.load.image('clickbox','visual/bluebox.png');
		this.load.image('logo','visual/logo.png');
	}
	
	
	
	create(){
        $.get('Admin/table.php?lvl=1', function(data) {
               //alert('Load was performed.');
               //alert(data);
			   //table = data;
			    scoresArray1 = data.split(',');
                //console.log(scoresArray);
               
            });
        $.get('Admin/table.php?lvl=2', function(data) {
               //alert('Load was performed.');
               //alert(data);
			   //table = data;
			    scoresArray2 = data.split(',');
                //console.log(scoresArray);
               
            });
        $.get('Admin/table.php?lvl=3', function(data) {
               //alert('Load was performed.');
               //alert(data);
			   //table = data;
			    scoresArray3 = data.split(',');
                //console.log(scoresArray);
               
            });
        $.get('Admin/table.php?lvl=4', function(data) {
               //alert('Load was performed.');
               //alert(data);
			   //table = data;
			    scoresArray4 = data.split(',');
                //console.log(scoresArray);
               
            });
        
		this.add.image(0,0,'blurhome').setScale(1).setOrigin(0,0);
		this.logo = this.add.image(400,370,'logo').setScale(0.4);
		
		var box1 = this.physics.add.staticGroup();
				box1.create(160,100, 'clickbox').setScale(0.5).refreshBody();
		var box2 = this.physics.add.staticGroup();
				box2.create(310,100, 'clickbox').setScale(0.5).refreshBody();
		var box3 = this.physics.add.staticGroup();
				box3.create(460,100, 'clickbox').setScale(0.5).refreshBody();
		var box4 = this.physics.add.staticGroup();
				box4.create(610,100, 'clickbox').setScale(0.5).refreshBody();
        
        var level1 = this.physics.add.staticGroup();
				level1.create(620,200, 'clickbox').setScale(0.3).refreshBody();
        var level2 = this.physics.add.staticGroup();
				level2.create(620,300, 'clickbox').setScale(0.3).refreshBody();
        var level3 = this.physics.add.staticGroup();
				level3.create(620,400, 'clickbox').setScale(0.3).refreshBody();
        var level4 = this.physics.add.staticGroup();
				level4.create(620,500, 'clickbox').setScale(0.3).refreshBody();
		
		mouses = this.physics.add.image(400,300,'cursor').setDepth(1);
		mouses.setScale(0.8).setDepth(6);
		mouses.setVisible(true);
		mouses.setCollideWorldBounds(true);
		mouses.body.setAllowGravity(false);
		
		leaderboard = this.add.image(400,300,'leaderboard').setScale(0.4).setDepth(2);
		this.text = this.add.text(300, 30, 'Leaderboard', { font: '40px Roboto' }).setScrollFactor(0).setDepth(3).setTint(0xe3f5f4);
		this.hide = this.add.image(400,570,'hide').setScale(1).setDepth(5);
		this.text.setVisible(false);
		leaderboard.setVisible(false);
        this.hide.setVisible(false);
        this.help = this.add.image(400,300,'help1').setScale(1).setDepth(4);
        this.help.setVisible(false);
		
		back = this.physics.add.sprite(160,100,'back').setInteractive().setScale(0.5);
			back.setVisible(true).body.setAllowGravity(false);
		restart = this.physics.add.sprite(310,100,'replay').setInteractive().setScale(0.5);
			restart.setVisible(true).body.setAllowGravity(false);
		rating = this.physics.add.sprite(460,100,'rating').setInteractive().setScale(0.5);
			rating.setVisible(true).body.setAllowGravity(false);
		question = this.physics.add.sprite(610,100,'question').setInteractive().setScale(0.5);
			question.setVisible(true).body.setAllowGravity(false);
        
        number1 = this.physics.add.sprite(620,200,'number1').setInteractive().setScale(0.3);
			number1.setVisible(false).body.setAllowGravity(false);
        number2 = this.physics.add.sprite(620,300,'number2').setInteractive().setScale(0.3);
			number2.setVisible(false).body.setAllowGravity(false);
        number3 = this.physics.add.sprite(620,400,'number3').setInteractive().setScale(0.3);
			number3.setVisible(false).body.setAllowGravity(false);
        number4 = this.physics.add.sprite(620,500,'number4').setInteractive().setScale(0.3);
			number4.setVisible(false).body.setAllowGravity(false);
		
		this.helpback = this.physics.add.sprite(70,550,'back').setInteractive().setScale(0.3).setDepth(5);
        this.helpback.setVisible(false);
        this.helpback.setVisible(false).body.setAllowGravity(false);
        
		 
		tableset = this.add.text(300, 100, '', {font: '35px Roboto'}).setDepth(2);
        tableset.setVisible(false);

		//mouselock
		game.canvas.addEventListener('mousedown', function () {
        	game.input.mouse.requestPointerLock();
			mouses.setVisible(true);
    	});
		
		//mouseunlock
		this.input.keyboard.on('keydown_Q', function (event) {
        if (game.input.mouse.locked)
            game.input.mouse.releasePointerLock();
			mouses.setVisible(false);
		}, 0, this);
		
		
		this.input.on('pointermove', function (pointer) {
			
				if (this.input.mouse.locked)
				{
					mouses.x += pointer.movementX;
					mouses.y += pointer.movementY;
					
				}
			
				
		}, this);
		
		this.input.keyboard.on('keyup', function(e){
				if(e.keyCode == '13' && prevKey === true){
						this.scene.start("Home");
					}
				else if(e.keyCode == '13' && prevKey === false){
						this.scene.start("Start");
					}
		},this);
		
		
		this.input.keyboard.on('keyup', function(e){
				if(e.keyCode == '27'){
						this.scene.start("Home");
					}
				},this);
		cursors = this.input.keyboard.createCursorKeys();
		
		var pdown = false;
		this.input.on('pointerdown', function (pointer) {
				pdown = true;
		});
		this.input.on('pointerup', function (pointer) {
				pdown = false;
		});
		
		var leaderboardon = false;
		this.physics.add.collider(mouses, box1, function(scene){
			if(pdown){
				if(leaderboardon === true){
					leaderboardon = false;
					this.text.setVisible(false);
					leaderboard.setVisible(false);
                    this.hide.setVisible(false);
                    tableset.setVisible(false);
					rating.setVisible(true);
					restart.setVisible(true);
					question.setVisible(true);
					this.logo.setVisible(true);
                    number1.setVisible(false);
                    number2.setVisible(false);
                    number3.setVisible(false);
                    number4.setVisible(false);
					pdown = false;
				}
				else{
				this.scene.start("Home");
				pdown = false;
				}
			}
		},null, this);
		this.physics.add.collider(mouses, box2, function(scene){
			if(pdown){
				this.scene.start("Start");
				pdown = false;
			}},null, this);
        //scoresArray = scoresArray1;
        
        
		this.physics.add.collider(mouses, box3, function(scene){
			if(pdown){
                scoresArray = scoresArray1;
				this.text.setVisible(true);
				leaderboard.setVisible(true);
				leaderboardon = true;
                this.hide.setVisible(true);
                number1.setVisible(true);
                number2.setVisible(true);
                number3.setVisible(true);
                number4.setVisible(true);
                tableset.setVisible(true);
				rating.setVisible(false);
				restart.setVisible(false);
				question.setVisible(false);
				this.logo.setVisible(false);
				pdown = false;
			}},null, this);
        
		this.physics.add.collider(mouses, box4, function(scene){
			if(pdown){
                this.help.setVisible(true);
                this.helpback.setVisible(true);
				pdown = false;
			}},null, this);
        this.physics.add.collider(mouses, this.helpback, function(scene){
			if(pdown){
				this.help.setVisible(false);
                this.helpback.setVisible(false);
				pdown = false;
			}},null, this);
        
		this.physics.add.collider(mouses, level1, function(scene){
			if(pdown){
                console.log('1');
                scoresArray = scoresArray1;
				pdown = false;
			}},null, this);
        this.physics.add.collider(mouses, level2, function(scene){
			if(pdown){
                console.log('2');
                scoresArray = scoresArray2;
				pdown = false;
			}},null, this);
        this.physics.add.collider(mouses, level3, function(scene){
			if(pdown){
                console.log('3');
                scoresArray = scoresArray3;
				pdown = false;
			}},null, this);
        this.physics.add.collider(mouses, level4, function(scene){
			if(pdown){
                console.log('4');
                scoresArray = scoresArray4;
				pdown = false;
			}},null, this);
		
	}
	
	update(delta){
		
		tableset.setText(scoresArray).setScrollFactor(0);
	}
	
	backhit(mouse, back){
		back.setTint(0xff0000);
	}
}