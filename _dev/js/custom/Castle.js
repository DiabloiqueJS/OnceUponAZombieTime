define( [ 'datas', 'DREAM_ENGINE', 'DE.GamePad', 'Enemy', 'Player'],
function( datas, DE, GamePad, Enemy, Player)
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
	      if( this.life <= 0 ){
	  	    	this.gameover();
	  	    	this.life = 0;
  	    	}
	    }

	    this.gameover = function(){
	    	Game.play = false;

		      this.gui = new DE.GameObject( { "x": _screenSizes.w / 2, "y": _screenSizes.h / 2, "zindex": 25 } );
		      var loose = new DE.GameObject( {
		        "renderer": new DE.TextRenderer( {
		           "fontSize": 64, "font": "Arial Black" // not a nice font but just to show you how to :)
		        }, 700, 100, DE.LangSystem.get( "loose" ) )
		      } );
		      this.gui.restartBtn = new DE.GameObject( {
		        "y": 150
		        , "renderers": [
		          new DE.SpriteRenderer( { "spriteName": "btn" } )
		          , new DE.TextRenderer( {
		            "fontSize": 32, "font": "Amatic"
		          }, 300, 60, DE.LangSystem.get( "replay" ) )
		        ]
		        , "collider": new DE.FixedBoxCollider( 550, 70 )
		      } );
		      this.gui.restartBtn.onMouseEnter = function()
		      {
		        this.renderers[ 0 ].setFrame( 1 );
		      }
		      this.gui.restartBtn.onMouseLeave = function()
		      {
		        this.renderers[ 0 ].setFrame( 0 );
		      }
		      this.gui.restartBtn.onMouseUp = function()
		      {
		        this.parent.enable = false;
		        Game.play = true;
		        this.renderers[ 0 ].setFrame( 0 );
		        _self.trigger( "restart" ); // use trigger method - Game will catch it
		      }
		      this.gui.add( loose );
		      this.gui.add( this.gui.restartBtn );
		      this.scene.add( this.gui );
		    }
		   
    
	    

	}
	Castle.prototype = new DE.GameObject();
  	Castle.prototype.constructor = Castle;
  	Castle.prototype.supr        = DE.GameObject.prototype;


	return Castle;
} );