define( [ 'datas', 'DREAM_ENGINE', 'DE.GamePad'],
function( datas, DE, GamePad)
{
	function Castle( _screenSizes )
	{
		DE.GameObject.call( this, {
	      "x": 40, "y": 400, "zindex": 1, "tag": "castle"
	      ,"collider": new DE.CircleCollider( 20 )
	    } );

	    this.add(new DE.GameObject( {
	      "x": 40, "y": 500, "z": 5, "tag": "castle", "collider": new DE.CircleCollider( 20 )
	    } ) );

	    this.add(new DE.GameObject( {
	      "x": 40, "y": 600, "z": 5, "tag": "castle", "collider": new DE.CircleCollider( 20 )
	    } ) );

	    this.add(new DE.GameObject( {
	      "x": 40, "y": 700, "z": 5, "tag": "castle", "collider": new DE.CircleCollider( 20 )
	    } ) );

	    this.add(new DE.GameObject( {
	      "x": 40, "y": 300, "z": 5, "tag": "castle", "collider": new DE.CircleCollider( 20 )
	    } ) );

	    this.add(new DE.GameObject( {
	      "x": 40, "y": 200, "z": 5, "tag": "castle", "collider": new DE.CircleCollider( 20 )
	    } ) );

	}
	return Castle;
} );