class PauseScreen2 extends Phaser.Scene{
	constructor(){
		super({key:"PauseScreen2"});
		Phaser.Scene.call(this, { key: 'PauseScreen2' });
	}
	
	
	preload(){
		this.load.image('play','visual/play.png');
		this.load.image('pause','visual/pause.png');
        this.load.image('close','visual/Buttons/Close_BTN.png');
        this.load.image('restart','visual/Buttons/Replay_BTN.png');
	}
	
	create(){
		var pause = this.add.image(760,40,'pause').setScale(0.7).setScrollFactor(0);
		gameclose = this.add.image(200,150,'close').setScale(0.7);
		gamerestart = this.add.image(600,150,'restart').setScale(0.7);
        gameclosetxt = this.add.text(140, 250, '1 to Exit', {font: '35px Roboto'});
        gamerestarttxt = this.add.text(540, 250, '2 to Restart', {font: '35px Roboto'});
        
        this.input.keyboard.on('keyup', function(e){
					if(e.key == "1"){
						this.scene.start("Home");
                        this.scene.stop("Game2");
                        this.scene.stop("pauseplay2");
					}
                    if(e.key == "2"){
						this.scene.start("Game2");
                        this.scene.stop("pauseplay2");
					}
				},this);
        
        
		//pause play
		this.input.keyboard.on('keydown_Q', function (event) {
			console.log('resume');
			pause.setVisible(false);
			game.scene.resume('Game2');
            gameclose.setVisible(false);
            gameclosetxt.setVisible(false);
            gamerestart.setVisible(false);
            gamerestarttxt.setVisible(false);
    		game.scene.stop();
			

    	});
	}
	
	update(delta){
		
	}
}