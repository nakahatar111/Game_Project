class Start extends Phaser.Scene{
	constructor(){
		super({key:"Start"});
	}
	
	preload(){
		this.load.image('start','visual/startbutton.png');
		this.load.image('startbg','visual/startback.jpg');
		this.load.image('inst','visual/mapinstruction.png');

	}
	
	
	create(){
        $.get('Admin/name.php', function(data) {
               //alert('Load was performed.');
               //alert(data);
			   //table = data;
			    name = data;
                //console.log(scoresArray);
               
            });
		this.inst = this.add.image(400,300,'inst').setScale(1.7).setDepth(1);
		this.inst.setVisible(false);
		this.add.image(-140,0,'startbg').setScale(0.42).setOrigin(0,0);
		this.add.image(400,370,'start').setScale(0.7);
		this.input.keyboard.on('keyup', function(e){
				if(e.keyCode == '13'){
						this.scene.start("Home");
					}
				},this);
		this.add.text(600, 575, 'Press Q for instruction', { font: '20px Roboto' });
		this.text = this.add.text(600, 575, 'Press E to exit', { font: '20px Roboto' }).setDepth(1);
		this.text.setVisible(false);
		this.input.keyboard.on('keyup_Q', function(e){
				this.inst.setVisible(true);
				this.text.setVisible(true);
		},this);
		this.input.keyboard.on('keyup_E', function(e){
				this.inst.setVisible(false);
				this.text.setVisible(false);
		},this);
		this.input.on('pointerdown', function(event){
			this.scene.start("Home");
		},this);
	}
	
	update(delta){
		
	}
}