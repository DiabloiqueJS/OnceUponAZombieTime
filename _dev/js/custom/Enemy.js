define( [ 'datas', 'DREAM_ENGINE', 'Bullet' ],
function( datas, DE, Bullet )
{
  // args are written with a _ because they become private (we use args later in methods)
  // optimising performances here by passing the player to check collisions only with this objects
  // (we don't need to search it inside all gameObjects,
  //  and we will give the player's reference to Bullets to do the same)
  function Enemy( _screenSizes, params, _player )
  {
    var _myd = datas.enemies[ params.name ];
    DE.GameObject.call( this, {
      "x": _screenSizes.w/*params.x*/, "y": params.y, "name": params.name, "tag": "enemy"
      ,"renderer": new DE.SpriteRenderer( { "spriteName": _myd.spriteName
                                         , "startFrame": _myd.frame, "scale": _myd.scale || 1 } )
      ,"collider": new DE.CircleCollider( _myd.radius || 30
                        , { "offsetX": _myd.colOffsetX || 0, "offsetY": _myd.colOffsetY || 0 } )
    } );
    var life;
    this.add( life = new DE.GameObject( {
      "x": 0, "y": -80, "z": 5, "renderer": new DE.SpriteRenderer( { "spriteName": "life", "scaleY": 0.6, "scaleX": 0.3 } )
    } ) );
    this.lifeWidth  = life.renderers[0].sizes.width;
    this.lastFire   = Date.now();
    this.fireRate   = _myd.fireRate;
    this.life       =  10;
    this.maxlife    =  10;
    this.offsetFire = _myd.offsetFire || 0;
    this.speed      = 1;
    
    this.init = function()
    {
      this.lifeWidth = life.renderers[0].sizes.width;
    }


    this.gameLogic = function()
    {
      
      /*if ( this.position.y > 1400 )
        this.askToKill();
      if ( _player.enable && !_player.flipping
          && DE.CollisionSystem.circleCollision( this.collider, _player.collider ) )
      {
        this.askToKill();
        _player.getDamage();
      }*/
      this.translateX( -this.speed );
     // this.fire();
    }
    // very simple fire method, just a fireRate
    this.fire = function()
    {
      if ( !this.enable || !this.fireRate || Date.now() - this.lastFire < this.fireRate )
        return;
      this.lastFire = Date.now();
      //this.scene.add( new Bullet( _screenSizes, this, _player ) );
    }
    
    this.getDamage = function()
    {
      this.life--;
      life.renderers[0].sizes.width = (this.life / this.maxlife)* this.lifeWidth;
      console.log((this.life / this.maxlife));
      if ( this.life <= 0 )
        this.askToKill();
    }
    
    this.addAutomatism( "IA", "gameLogic" );
  };
  
  Enemy.prototype = new DE.GameObject();
  Enemy.prototype.constructor = Enemy;
  Enemy.prototype.supr        = DE.GameObject.prototype;
  
  return Enemy;
} );