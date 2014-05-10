define( [ 'datas', 'DREAM_ENGINE', 'DE.GamePad'],
function( datas, DE, GamePad)
{
	function Castle( _screenSizes )
	{
		DE.GameObject.call( this, {
	      "x": 40, "y": 400, "zindex": 1, "tag": "castle"
	      ,"collider": new DE.CircleCollider( 20 )
	    } );

	    var castle1 = new DE.GameObject( {
	      "x": 40, "y": 500, "z": 5, "tag": "castle", "collider": new DE.CircleCollider( 20 )
	    }  );

	    var castle2 = new DE.GameObject( {
	      "x": 40, "y": 600, "z": 5, "tag": "castle", "collider": new DE.CircleCollider( 20 )
	    }  );

	    var castle3 = new DE.GameObject( {
	      "x": 40, "y": 700, "z": 5, "tag": "castle", "collider": new DE.CircleCollider( 20 )
	    }  );

	    var castle4 = new DE.GameObject( {
	      "x": 40, "y": 300, "z": 5, "tag": "castle", "collider": new DE.CircleCollider( 20 )
	    } );

	    var castle5 = new DE.GameObject( {
	      "x": 40, "y": 200, "z": 5, "tag": "castle", "collider": new DE.CircleCollider( 20 )
	    } );
		
	    this.life = 2000;


	    this.init = function(){
	    	    Game.scene.add( castle1 );
	    	    Game.scene.add( castle2 );
	    	    Game.scene.add( castle3 );
	    	    Game.scene.add( castle4 );
	    	    Game.scene.add( castle5 );
	    	}

	}
	return Castle;
} );