define( [ 'datas', 'DREAM_ENGINE', 'Bullet', 'GUI', 'Trap' ],
function( datas, DE, Bullet, GUI, Trap )
{
  // args are written with a _ because they become private (we use args later in methods)
  // optimising performances here by passing the player to check collisions only with this objects
  // (we don't need to search it inside all gameObjects,
  //  and we will give the player's reference to Bullets to do the same)
  function Enemy( _screenSizes, params, _player )
  {
    var _myd = datas.enemies[ params.name ];
    DE.GameObject.call( this, {
      "x": _screenSizes.w/*params.x*/, "y": params.y,"z": 2, "name": params.name, "tag": "enemy"
      ,"renderer": new DE.SpriteRenderer( { "spriteName": "enemies"
                                         , "startFrame": _myd.frame, "scale": 0.12 } )
      ,"collider": new DE.CircleCollider( _myd.radius || 30
                        , { "offsetX": _myd.colOffsetX || 0, "offsetY": _myd.colOffsetY || 0 } )
    } );
    var life;
    this.add( life = new DE.GameObject( {
      "x": 0, "y": -40, "z": -2, "renderer": new DE.SpriteRenderer( { "spriteName": "life", "scaleY": 0.3, "scaleX": 0.15 } )
    } ) );
    this.lifeWidth  = life.renderers[0].sizes.width;
    this.lastFire   = Date.now();
    this.fireRate   = 1500;
    this.life       =  10;
    this.maxlife    =  10;
    this.offsetFire = _myd.offsetFire || 0;
    this.speed      = 1;
    this.walk       = true;

    this.gameLogic = function()
    {
      if(!Game.run)
        return;

      if(!Game.play)
        return;

      var gos = this.scene.gameObjects;
        for ( var n = 0, t = gos.length, g; n < t; ++n )
        { 
          this.walk = true;
          g = gos[ n ];
          if ( g.tag == "castle" && DE.CollisionSystem.circleCollision( this.collider, g.collider ) )
          {
            this.walk = false;
            
            if ( !this.enable || !this.fireRate || Date.now() - this.lastFire < this.fireRate )
              return;
            this.lastFire = Date.now();
            g.getDamage(5);

            return;
          }

          if ( g.tag == "wall" && DE.CollisionSystem.circleCollision( this.collider, g.collider ) )
          {
            this.walk = false;
            
            if ( !this.enable || !this.fireRate || Date.now() - this.lastFire < this.fireRate )
              return;
            this.lastFire = Date.now();
            g.getDamage(5);

            return;
          }


          if ( g.tag == "hole" && DE.CollisionSystem.circleCollision( this.collider, g.collider ) )
          {
            this.walk = false;
            this.askToKill();

            Game.thisWave++;
            g.clean();

            return;
          }


          if ( g.tag == "stab" && DE.CollisionSystem.circleCollision( this.collider, g.collider ) )
          {
             if ( !this.enable || !this.fireRate || Date.now() - this.lastFire < (this.fireRate/2) )
              return;
              this.lastFire = Date.now();
              this.getDamage();

            return;
          }


          if(this.position.x<=200){
            this.walk = false;

            if ( !this.enable || !this.fireRate || Date.now() - this.lastFire < this.fireRate )
              return;

            this.lastFire = Date.now();
            Game.castle.getDamage(10);

          }
        }

      if(this.walk){
        this.translateX( -this.speed );

      }

     // this.fire();
    }
    // very simple fire method, just a fireRate
    this.fire = function(cible)
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
      
      if ( this.life <= 0 ){
        Game.gold += 10;
        Game.gui.update();
        this.askToKill();
        Game.thisWave++;
      }
    }
    
    this.addAutomatism( "IA", "gameLogic" );
  };
  
  Enemy.prototype = new DE.GameObject();
  Enemy.prototype.constructor = Enemy;
  Enemy.prototype.supr        = DE.GameObject.prototype;
  
  return Enemy;
} );