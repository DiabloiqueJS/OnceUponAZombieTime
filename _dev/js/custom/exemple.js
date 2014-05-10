define( [ 'datas', 'DREAM_ENGINE', 'DE.GamePad', 'Player'],
function( datas, DE, GamePad, Player)
{
	function GUI( _screenSizes)
    {
	    DE.GameObject.call( this, {
	          "x": 80, "y":_screenSizes.h*0.5, "zindex": 8
	      	,"renderer": new DE.SpriteRenderer( { "spriteName": "flecheG", "scale": 1 })
	      	,"collider": new DE.CircleCollider( 35 )
	      	
	    } );

	    this.onMouseEnter = function(){ 
	    	this.renderers[ 0 ].setFrame( 1 );
		    Game.player1.moveLeft();
		    Game.player2.moveLeft();
	     }
	    this.onMouseLeave = function(){ this.renderers[ 0 ].setFrame( 0 ); }
	    this.onMouseUp = function()
		{
		    this.renderers[ 0 ].setFrame( 0 );
		    Game.player1.moveLeft();
		    Game.player2.moveLeft();
		}

		

	    this.init = function(){


			var ArrowB_bg = new DE.GameObject( {
			  "x": 60, "y":_screenSizes.h*0.5 + 110, "zindex": 8
	      	,"renderer": new DE.SpriteRenderer( { "spriteName": "flecheB", "scale": 1} )
	      	,"collider": new DE.CircleCollider( 35 )
	        } );
	        ArrowB_bg.onMouseEnter = function(){ 
		    	this.renderers[ 0 ].setFrame( 1 );
			    Game.player1.moveDown();
			    Game.player2.moveDown(); 
			}
	    	ArrowB_bg.onMouseLeave = function(){ this.renderers[ 0 ].setFrame( 0 ); }
	     	ArrowB_bg.onMouseUp = function()
		    {
		        this.renderers[ 0 ].setFrame( 0 );
		        Game.player1.moveDown();
		        Game.player2.moveDown();
		    }
	        this.scene.add( ArrowB_bg );

	        var ArrowB_bd = new DE.GameObject( {
	          "x": _screenSizes.w - 65, "y":_screenSizes.h*0.5 + 110, "zindex": 8
	      	,"renderer": new DE.SpriteRenderer( { "spriteName": "flecheB", "scale": 1} )
	      	,"collider": new DE.CircleCollider( 35 )
	        } );
	        ArrowB_bd.onMouseEnter = function(){ 
		    	this.renderers[ 0 ].setFrame( 1 );
			    Game.player1.moveDown();
			    Game.player2.moveDown(); 
			}
	    	ArrowB_bd.onMouseLeave = function(){ this.renderers[ 0 ].setFrame( 0 ); }
	     	ArrowB_bd.onMouseUp = function()
		    {
		        this.renderers[ 0 ].setFrame( 0 );
		        Game.player1.moveDown();
		        Game.player2.moveDown();
		    }
	        this.scene.add( ArrowB_bd );

	        var ArrowH_bg = new DE.GameObject( {
	          "x": 65, "y":_screenSizes.h*0.5 - 110, "zindex": 8
	      	,"renderer": new DE.SpriteRenderer( { "spriteName": "flecheH", "scale": 1} )
	      	,"collider": new DE.CircleCollider( 35 )
	        } );
	        ArrowH_bg.onMouseEnter = function(){ 
		    	this.renderers[ 0 ].setFrame( 1 );
			    Game.player1.moveUp();
			    Game.player2.moveUp(); 
			}
	    	ArrowH_bg.onMouseLeave = function(){ this.renderers[ 0 ].setFrame( 0 ); }
	     	ArrowH_bg.onMouseUp = function()
		    {
		        this.renderers[ 0 ].setFrame( 0 );
		        Game.player1.moveUp();
		        Game.player2.moveUp();
		    }
	        this.scene.add( ArrowH_bg );

	        var ArrowH_bd = new DE.GameObject( {
	          "x": _screenSizes.w - 60, "y":_screenSizes.h*0.5 - 110, "zindex": 8
	      	,"renderer": new DE.SpriteRenderer( { "spriteName": "flecheH", "scale": 1} )
	      	,"collider": new DE.CircleCollider( 35 )
	        } );
	        ArrowH_bd.onMouseEnter = function(){ 
		    	this.renderers[ 0 ].setFrame( 1 );
			    Game.player1.moveUp();
			    Game.player2.moveUp(); 
			}
	    	ArrowH_bd.onMouseLeave = function(){ this.renderers[ 0 ].setFrame( 0 ); }
	     	ArrowH_bd.onMouseUp = function()
		    {
		        this.renderers[ 0 ].setFrame( 0 );
		        Game.player1.moveUp();
		        Game.player2.moveUp();
		    }
	        this.scene.add( ArrowH_bd );

	        var ArrowR = new DE.GameObject( {
	          "x": _screenSizes.w - 80, "y":_screenSizes.h*0.5, "zindex": 8
	      	,"renderer": new DE.SpriteRenderer( { "spriteName": "flecheD", "scale": 1} )
	      	,"collider": new DE.CircleCollider( 35 )
	        } );
	        ArrowR.onMouseEnter = function(){ 
		    	this.renderers[ 0 ].setFrame( 1 );
			    Game.player1.moveRight();
			    Game.player2.moveRight(); 
			}
	    	ArrowR.onMouseLeave = function(){ this.renderers[ 0 ].setFrame( 0 ); }
	     	ArrowR.onMouseUp = function()
		    {
		        this.renderers[ 0 ].setFrame( 0 );
		        Game.player1.moveRight();
		        Game.player2.moveRight();
		    }
	        this.scene.add( ArrowR );


	    }

	    this.update = function(){

	    }

	   
	    this.addAutomatism( "update", { "type": "update" } );

    }

  GUI.prototype = new DE.GameObject();
  GUI.prototype.constructor = GUI;
  GUI.prototype.supr        = DE.GameObject.prototype;
  
  return GUI;
});