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
	      "x": 20, "y": -150, "z": 5,
	       "renderer": new DE.SpriteRenderer( { "spriteName": "life", "scaleY": 1, "scaleX": 0.5 })
	    } ) );
	    this.add( new DE.GameObject( {
	      "x": 0, "y": 80, "z": 5, "tag": "castle",
	       "renderer": new DE.SpriteRenderer( { "spriteName": "rien", "scaleY": 1, "scaleX": 0.5 }) , 
	       	"collider": new DE.CircleCollider( 40 )
	    } ) );
	    this.add( new DE.GameObject( {
	      "x": 0, "y": 160, "z": 5, "tag": "castle",
	       "renderer": new DE.SpriteRenderer( { "spriteName": "rien", "scaleY": 1, "scaleX": 0.5 }) , 
	       	"collider": new DE.CircleCollider( 40 )
	    } ) );
	    this.add( new DE.GameObject( {
	      "x": 0, "y": 240, "z": 5, "tag": "castle",
	       "renderer": new DE.SpriteRenderer( { "spriteName": "rien", "scaleY": 1, "scaleX": 0.5 }) , 
	       	"collider": new DE.CircleCollider( 40 )
	    } ) );
	    this.add( new DE.GameObject( {
	      "x": 0, "y": 320, "z": 5, "tag": "castle",
	       "renderer": new DE.SpriteRenderer( { "spriteName": "rien", "scaleY": 1, "scaleX": 0.5 }) , 
	       	"collider": new DE.CircleCollider( 40 )
	    } ) );
	    this.add( new DE.GameObject( {
	      "x": 0, "y": 400, "z": 5, "tag": "castle",
	       "renderer": new DE.SpriteRenderer( { "spriteName": "rien", "scaleY": 1, "scaleX": 0.5 }) , 
	       	"collider": new DE.CircleCollider( 40 )
	    } ) );

	    this.add( new DE.GameObject( {
	      "x": 0, "y": 160, "z": 5, "tag": "castle",
	       "renderer": new DE.SpriteRenderer( { "spriteName": "rien", "scaleY": 1, "scaleX": 0.5 }) , 
	       	"collider": new DE.CircleCollider( 40 )
	    } ) );
	    this.add( new DE.GameObject( {
	      "x": 0, "y": 240, "z": 5, "tag": "castle",
	       "renderer": new DE.SpriteRenderer( { "spriteName": "rien", "scaleY": 1, "scaleX": 0.5 }) , 
	       	"collider": new DE.CircleCollider( 40 )
	    } ) );
	    this.lifeWidth  = life.renderers[0].sizes.width;
		this.life       =  2000;
	    this.maxlife    =  2000;


	    this.add( new DE.GameObject( {
		      "x": 0, "y": 40, "z": 5, "tag": "castle2", "collider": new DE.CircleCollider( 60 )
		    } ) );

	    this.init = function(){

	    	}

	}
	Castle.prototype = new DE.GameObject();
  	Castle.prototype.constructor = Castle;
  	Castle.prototype.supr        = DE.GameObject.prototype;


	return Castle;
} );