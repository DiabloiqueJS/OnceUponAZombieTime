define( ['DREAM_ENGINE', 'GUI'],
function(DE, GUI)
{
	function Trap(comportement, idCase)
	{
		this.idCase = idCase;
		this.width = 117 * 0.6666666666666666666666666666666666;
		this.heigth = 117 * 0.666666666666666666666666666666666;
		this.startpos = {x: 212 * 0.67, y:209 * 0.6666666666666666666666666666666};
		this.life = 100;
		this.dmg = 1;

		DE.GameObject.call(this,
		{
	      "x": this.startpos.x + ((this.idCase % 10) * this.width) + this.width / 2,
	      "y": this.startpos.y + (Math.floor( this.idCase / 10) * this.heigth) + this.heigth / 2,
	      "tag": this.comportement,
	      "renderer": new DE.SpriteRenderer( { "spriteName": "rien", "scale": 1 * 0.6666666666666666666 } ),
	      "collider": new DE.CircleCollider( this.width/2 )
	    });

		this.update = function(){

		}

		this.onMouseUp = function()
	    {
	    	if(Game.gui.select == "hole" ){

	    		DE.GameObject.call(this,
				{
			      "x": this.startpos.x + ((this.idCase % 10) * this.width) + this.width / 2,
			      "y": this.startpos.y + (Math.floor( this.idCase / 10) * this.heigth) + this.heigth / 2,
			      "tag": "hole",
			      "renderer": new DE.SpriteRenderer( { "spriteName": "hole", "scale": 1 * 0.6666666666666666666 } ),
			      "collider": new DE.CircleCollider( this.width/2 )
			    });

	    	}
	     	
	    	if(Game.gui.select == "stab" ){
	    		
	    		DE.GameObject.call(this,
				{
			      "x": this.startpos.x + ((this.idCase % 10) * this.width) + this.width / 2,
			      "y": this.startpos.y + (Math.floor( this.idCase / 10) * this.heigth) + this.heigth / 2,
			      "tag": "stab",
			      "renderer": new DE.SpriteRenderer( { "spriteName": "stab", "scale": 1 * 0.6666666666666666666 } ),
			      "collider": new DE.CircleCollider( this.width/2 )
			    });

	    	}
	     	
	    	if(Game.gui.select == "wall" ){
	    		
	    		DE.GameObject.call(this,
				{
			      "x": this.startpos.x + ((this.idCase % 10) * this.width) + this.width / 2,
			      "y": this.startpos.y + (Math.floor( this.idCase / 10) * this.heigth) + this.heigth / 2,
			      "tag": "wall",
			      "renderer": new DE.SpriteRenderer( { "spriteName": "wall", "scale": 1 * 0.6666666666666666666 } ),
			      "collider": new DE.CircleCollider( this.width/2 )
			    });

	    	}
	    }

	    this.getDamage = function(){
	    	
	    }


    	this.addAutomatism( "logic", "update" );
	}

	Trap.prototype = new DE.GameObject();
  	Trap.prototype.constructor = Trap;
  	Trap.prototype.supr        = DE.GameObject.prototype;

	return Trap;
});