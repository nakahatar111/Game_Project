var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
    parent	: 'phaser',
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y:200},
			width: 1200,
            height: 600,
		}
		
	},
	scene: [ Start, Home , Menu , Game1 , Game2 , Game3 , Game4 , PauseScreen1 , PauseScreen2 , PauseScreen3 , PauseScreen4]
	
};

var game = new Phaser.Game(config);
const Random = Phaser.Math.Between;

const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

var getItems = $.get('Admin/table.php?lvl=1', function(data) {
				var tabledata = [''];
				
			    tabledata = data.split(','); 
            
				//console.log(tabledata);
				return tabledata;
			});
var name;
$.get('Admin/name.php', function(data) {
               //alert('Load was performed.');
               //alert(data);
			   //table = data;
			    name = data;
                //console.log(scoresArray);
               
            });
var tableevent;
var eventtimed;
var eventtrue = false;
var tabledata = [];
//intro game vars
var line1;
var line2;
var graphics;
var physicsImage;
var platforms;
var platform;
var player;
var cursors;
var stars;
var score = 0;
var scoreText;
var bombs;
var child;

var number1;
var number2;
var number3;
var number4;

var arrow;
//player
var kid;
var enter;
var exit;
var death;

var boss;
var bosscircle;
var kirby;

//enemy
var slime;
var zombie;
var zombie1;
var enemyranmove;
var enemynumber;
var detect;
var detects;
var detectss;
var overlap = false;
var overlaps = false;
var overlapss = false;
var overlapsss = false;

//health
var ehp1;
var ehp2;
var ehp3;
var ehp4;
var e1hp1;
var e1hp2;
var e1hp3;
var e1hp4;
var e2hp1;
var e2hp2;
var e2hp3;
var e2hp4;
var hp1;
var hp2;
var hp3;
var hp4;
var hp5;

//idk
var line;
var graphic;

//area
var zone;
var box;
var area;
var color;
var pause;

//mouse
var target;
var mouses;
var pointer;

//bullet
var bullets;
var ebullets;
var ebullets2;
var ebullets3;
var ebullets4;
var ebullets5;
var ebullets6;
var ebullets7;
var ebullets8;
var ebullets9;

var sebullets;
var senemybullet;

var e2bullets;
var e2bullets2;
var e2bullets3;
var e2bullets4;
var e2bullets5;
var e2bullets6;
var e2bullets7;
var e2bullets8;
var e2bullets9;

var enemybullet;
var etarget1;
var etarget2;
var etarget3;
var etarget4;
var etarget5;
var etarget6;
var etarget7;
var etarget8;

var enemy2bullet;
var e2target1;
var e2target2;
var e2target3;
var e2target4;
var e2target5;
var e2target6;
var e2target7;
var e2target8;

var enemybullet2;
var enemybullet3;
var enemybullet4;
var enemybullet5;
var enemybullet6;
var enemybullet7;
var enemybullet8;
var enemybullet9;

var enemy2bullet2;
var enemy2bullet3;
var enemy2bullet4;
var enemy2bullet5;
var enemy2bullet6;
var enemy2bullet7;
var enemy2bullet8;
var enemy2bullet9;

var bosstarget1;
var bosstarget2;
var bosstarget3;
var bosstarget4;
var bosstarget5;
var bosstarget6;
var bosstarget7;
var bosstarget8;

var ebbullets;
var ebbullets2;
var ebbullets3;
var ebbullets4;
var ebbullets5;
var ebbullets6;
var ebbullets7;
var ebbullets8;
var ebbullets9;

var benemybullet;
var benemybullet2;
var benemybullet3;
var benemybullet4;
var benemybullet5;
var benemybullet6;
var benemybullet7;
var benemybullet8;
var benemybullet9;

//idk
var speed;
var stats;

//shoot
var lastFired = 0;
var bulletnum = 0;
var bulletstore = 0;

//game item
var gun;
var ammo;
var sword;
var healthpack;
var ammotaken = false;
var healthtaken = false;
var clickss = true;
var bulletdamagehit = false;

//time
var timeevent;
var timer;
var timerscore = 0;
var playerscoretime = 0;
var timecont = true;

//text/image
var infotext;
var gameOver = false;
var gameWin = false;
var gameOverimage;
var gameOvermsg;
var gameWinimage;
var gameWinmsg;

//icons
var back;
var leaderboard;
var question;
var restart;
var rating;
var gameclose;
var gamerestart;
var gameclosetxt;
var gamerestarttxt;

//var table;
var tableset;
var scoresArray;
var scoresArray1;
var scoresArray2;
var scoresArray3;
var scoresArray4;


var Bullet = new Phaser.Class({

    Extends: Phaser.GameObjects.Image,

    initialize:

    // Bullet Constructor
    function Bullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bullet');
        this.speed = 0.5;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(0.3);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        this.setPosition(gun.x, gun.y); // Initial position
        this.direction = Math.atan( (target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = gun.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }

});

var getItems;

var EBullet = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybullet');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var EBullet2 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybullet');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var EBullet3 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybullet');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var EBullet4 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybullet');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var EBullet5 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybullet');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var EBullet6 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybullet');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var EBullet7 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybullet');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var EBullet8 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybullet');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var EBullet9 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybullet');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});


//enemy two
var E2Bullet = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybulletred');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var E2Bullet2 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybulletred');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var E2Bullet3 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybulletred');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var E2Bullet4 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybulletred');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var E2Bullet5 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybulletred');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var E2Bullet6 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybulletred');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var E2Bullet7 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybulletred');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var E2Bullet8 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybulletred');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var E2Bullet9 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybulletred');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});

//enemy slime purple
var EpBullet = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybulletpur');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var EpBullet6 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybulletpur');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var EpBullet7 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybulletpur');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var EpBullet8 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybulletpur');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var EpBullet9 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybulletpur');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});

//slime bullets
var EsBullet = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybulletpur');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(1);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});

//boss
var EbBullet = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'enemybulletred');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(2);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var EbBullet2 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bosssword2');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(0.3);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var EbBullet3 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bosssword4');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(0.3);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var EbBullet4 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bosssword3');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(0.3);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var EbBullet5 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bosssword1');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(0.3);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var EbBullet6 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bosssword6');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(0.3);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var EbBullet7 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bosssword6');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(0.3);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var EbBullet8 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bosssword7');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(0.3);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
var EbBullet9 = new Phaser.Class({
	
	Extends: Phaser.GameObjects.Image,
	
    initialize:
	
    // Bullet Constructor
    function EBullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bosssword5');
        this.speed = 0.45;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
		this.setScale(0.3);
    },

    // Fires a bullet from the player to the reticle
    fire: function (shooter, target)
    {
        
        this.setPosition(shooter.x, shooter.y); // Initial position
        this.direction = Math.atan((target.x-this.x) / (target.y-this.y));

        // Calculate X and y velocity of bullet to moves it from shooter to target
        if (target.y >= this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
            this.xSpeed = -this.speed*Math.sin(this.direction);
            this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        this.rotation = slime.rotation; // angle bullet with shooters rotation
        this.born = 0; // Time since new bullet spawned
    },

    // Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;
        this.born += delta;
        if (this.born > 1800)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});
