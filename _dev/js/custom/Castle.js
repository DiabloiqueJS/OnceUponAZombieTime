define( [ 'datas', 'DREAM_ENGINE', 'DE.GamePad', 'Enemy'],
function( datas, DE, GamePad, Enemy)
{
	function Castle( _screenSizes )
	{
		DE.GameObject.call( this, {
	      "x": 110, "y": 175, "zindex": 1, "tag": "castle"
	      ,"collider": new DE.CircleCollider( 40 )
	    } );

		var life;
	    this.add( life = new DE.GameObject( {
	      "x": 20, "y": -150, "z": 5,
	       "renderer": new DE.SpriteRenderer( { "spriteName": "life", "scaleY": 1, "scaleX": 0.5 })
	    } ) );
	    this.lifeWidth  = life.renderers[0].sizes.width;
		this.life       =  2000;
	    this.maxlife    =  2000;


	    this.init = function(){

	    	}

	    this.getDamage = function(dmg)
	    {
	      this.life -= dmg;
	      life.renderers[0].sizes.width = (this.life / this.maxlife)* this.lifeWidth;
	      if ( this.life <= 0 )
	        console.log("Game over");
	    }

	}
	Castle.prototype = new DE.GameObject();
  	Castle.prototype.constructor = Castle;
  	Castle.prototype.supr        = DE.GameObject.prototype;


	return Castle;
} );