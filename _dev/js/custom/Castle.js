define( [ 'datas', 'DREAM_ENGINE', 'DE.GamePad'],
function( datas, DE, GamePad)
{
	function Castle( _screenSizes )
	{
		DE.GameObject.call( this, {
	      "x": 110, "y": 175, "zindex": 1, "tag": "castle"
	      ,"collider": new DE.CircleCollider( 40 )
	    } );

		var life;
	    this.add( life = new DE.GameObject( {
	      "x": 20, "y": -150, "z": 5, "renderer": new DE.SpriteRenderer( { "spriteName": "life", "scaleY": 1, "scaleX": 0.5 } )
	    } ) );

	    this.lifeWidth  = life.renderers[0].sizes.width;
		this.life       =  2000;
	    this.maxlife    =  2000;


	    this.add( new DE.GameObject( {
		      "x": 0, "y": 40, "z": 5, "tag": "castle2", "collider": new DE.CircleCollider( 60 )
		    } ) );

	    this.init = function(){

		    var castle1 = new DE.GameObject( {
		      "x": 110, "y": 500, "z": 5, "tag": "castle", "collider": new DE.CircleCollider( 60 )
		    }  );

		    var castle2 = new DE.GameObject( {
		      "x": 110, "y": 600, "z": 5, "tag": "castle", "collider": new DE.CircleCollider( 60 )
		    }  );

		    var castle3 = new DE.GameObject( {
		      "x": 110, "y": 700, "z": 5, "tag": "castle", "collider": new DE.CircleCollider( 60 )
		    }  );

		    var castle4 = new DE.GameObject( {
		      "x": 110, "y": 300, "z": 5, "tag": "castle", "collider": new DE.CircleCollider( 60 )
		    } );

		    var castle5 = new DE.GameObject( {
		      "x": 110, "y": 200, "z": 5, "tag": "castle", "collider": new DE.CircleCollider( 60 )
		    } );
			

	    	    this.scene.add( castle1 );
	    	    this.scene.add( castle2 );
	    	    this.scene.add( castle3 );
	    	    this.scene.add( castle4 );
	    	    this.scene.add( castle5 );
	    	    console.log("salut");
	    	}

	}
	Castle.prototype = new DE.GameObject();
  	Castle.prototype.constructor = Castle;
  	Castle.prototype.supr        = DE.GameObject.prototype;


	return Castle;
} );