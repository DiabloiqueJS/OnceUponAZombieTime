define( [ 'datas', 'DREAM_ENGINE', 'DE.GamePad', 'Player'],
function( datas, DE, GamePad, Player)
{
	function GUI()
    {
	    this.init = function(){
	    	Game.menuBtn = new DE.GameObject( {
		        "x": Game.screen.w / 1.2, "y": Game.screen.h / 20
		        , "renderers": [
		          new DE.SpriteRenderer( { "spriteName": "btn", "scale": 0.67 } )
		          , new DE.TextRenderer( {
		            "fontSize": 32, "font": "Arial Black" // not a nice font but just to show you how to :)
		          }, 500, 60, DE.LangSystem.get( "play" ) )
		        ]
		        , "collider": new DE.FixedBoxCollider( 550, 70 )
		    } );
		    Game.menuBtn.onMouseEnter = function(){ this.renderers[ 0 ].setFrame( 1 ); }
		    Game.menuBtn.onMouseLeave = function(){ this.renderers[ 0 ].setFrame( 0 ); }
		    Game.menuBtn.onMouseUp = function()
		    {
		      console.log("bouton menu")
		    }
		    Game.scene.add( Game.menuBtn );

		    Game.trap1 = new DE.GameObject( {
		        "x": Game.screen.w / 1.05, "y": Game.screen.h / 1.07
		        , "renderers": [
		          new DE.SpriteRenderer( { "spriteName": "hole", "scale": 0.67 } )
		        ]
		        , "collider": new DE.FixedBoxCollider( 120 * 0.67, 120 * 0.67 )
		    } );
		    Game.trap1.onMouseEnter = function(){ this.renderers[ 0 ].setFrame( 1 ); }
		    Game.trap1.onMouseLeave = function(){ this.renderers[ 0 ].setFrame( 0 ); }
		    Game.trap1.onMouseUp = function()
		    {
		      console.log("bouton trap1");
		    }
		    Game.scene.add( Game.trap1 );

		    Game.trap2 = new DE.GameObject( {
		        "x": Game.screen.w / 1.15, "y": Game.screen.h / 1.07
		        , "renderers": [
		          new DE.SpriteRenderer( { "spriteName": "wall", "scale": 0.67 } )
		        ]
		        , "collider": new DE.FixedBoxCollider( 120 * 0.67, 120 * 0.67 )
		    } );
		    Game.trap2.onMouseEnter = function(){ this.renderers[ 0 ].setFrame( 1 ); }
		    Game.trap2.onMouseLeave = function(){ this.renderers[ 0 ].setFrame( 0 ); }
		    Game.trap2.onMouseUp = function()
		    {
		      console.log("bouton trap2");
		    }
		    Game.scene.add( Game.trap2 );

		    Game.trap3 = new DE.GameObject( {
		        "x": Game.screen.w / 1.27, "y": Game.screen.h / 1.07
		        , "renderers": [
		          new DE.SpriteRenderer( { "spriteName": "stab", "scale": 0.67 } )
		        ]
		        , "collider": new DE.FixedBoxCollider( 120 * 0.67, 120 * 0.67 )
		    });
		    Game.trap3.onMouseEnter = function(){ this.renderers[ 0 ].setFrame( 1 );}
		    Game.trap3.onMouseLeave = function(){ this.renderers[ 0 ].setFrame( 0 );}
		    Game.trap3.onMouseUp = function()
		    {
		      console.log("bouton trap3");
		    }
		    Game.scene.add( Game.trap3 );

		    Game.scene.add(new DE.GuiLabel( { 'id': "score", "fontSize": 40, 'font': "Arial",
		     "zindex": 10 , 'x': 50, 'y': 50, "w": 300, "h": 80, "fillColor": "rgb(255,200,0)", "strokeColor": "red"} 
		     , "Score : "+ Game.gold +" m" ));
	    }

	    this.update = function(){

	    }
    }

  GUI.prototype = new DE.GameObject();
  GUI.prototype.constructor = GUI;
  GUI.prototype.supr        = DE.GameObject.prototype;
  
  return GUI;
});