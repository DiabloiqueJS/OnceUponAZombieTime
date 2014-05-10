define( [ "datas", "DREAM_ENGINE" ]
, function( datas, DE )
{
  // args are written with a _ because they become private (we use args later in methods)
  // player reference is optionnal, only when it's an enemy instantiating a bullet
  function Bullet( _screenSizes, _parent, theTarget )
  {
    DE.GameObject.call( this, {
      "x": 50, "y": _screenSizes.h /3, "zindex": _parent.zindex + 1
      , "tag": _parent.tag == "player" ? "b-p" : "b-e"
      , "renderer": new DE.SpriteRenderer( { "spriteName": "bullet"/*( _parent.tag == "player" ? "p" : "e" ) + "-fire"*/
                                          , "scale": 1 } )
      , "collider": new DE.CircleCollider( 10 )
    } );
    this.vector = { x: 0, y: 0 };
    this.speed = 10;
    this.cible = false;

    this.init = function()
    {
      //this.position.setRotation( rotation );
    }
    
    this.gameLogic = function()
    {
      if(!this.cible){
        this.lookAt( theTarget );
        this.cible = true;
      }

        this.translate( {x: 0, y: -this.speed}, false );

      if ( this.position.y < -50 || this.position.y > _screenSizes.h + 50 )
        this.askToKill();
      
      // player bullets, checking collisions with all objects in the scene
      var gos = this.scene.gameObjects;
      for ( var n = 0, t = gos.length, g; n < t; ++n )
      {
        g = gos[ n ];
        if ( g.tag == "enemy" && DE.CollisionSystem.circleCollision( this.collider, g.collider ) )
        {
          g.getDamage();
          this.askToKill();
          return;
        }
      }
    
    }
    
    this.addAutomatism( "logic", "gameLogic" );
  }
  
  Bullet.prototype = new DE.GameObject();
  Bullet.prototype.constructor = Bullet;
  Bullet.prototype.supr        = DE.GameObject.prototype;
  
  return Bullet;
} );