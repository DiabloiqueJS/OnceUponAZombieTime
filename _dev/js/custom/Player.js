define( [ 'datas', 'DREAM_ENGINE', 'DE.GamePad', 'Bullet' ],
function( datas, DE, GamePad, Bullet )
{
  // args are written with a _ because they become private (and we use args later in methods)
  function Player( _screenSizes )
  {
    DE.GameObject.call( this, {
      "x": _screenSizes.w / 2, "y": _screenSizes.h - 280, "zindex": 1, "tag": "player"
      ,"renderer": new DE.SpriteRenderer( { "spriteName": "ship", "scale": 0.1 } )
    } );
    
    var _self = this;
  
    this.speed = 10;
    this.axes  = { x: 0, y: 0 };
    this.life  = 3;
    this.myTarget;

    
    this.init = function()
    {
     this.life = 3;
      this.position.setPosition( 50, _screenSizes.h /3 );
      this.enable = true;
     
    }
    
    this.checkPos = function()
    {
      // I should make a middleware for this case maybe
      if ( this.position.x < this.collider.radius )
        this.position.x = this.collider.radius;
      else if ( this.position.x > _screenSizes.w - this.collider.radius )
        this.position.x = _screenSizes.w - this.collider.radius;
      if ( this.position.y < this.collider.radius )
        this.position.y = this.collider.radius;
      else if ( this.position.y > _screenSizes.h - this.collider.radius )
        this.position.y = _screenSizes.h - this.collider.radius;
    }
    this.checkInputs = function()
    {
     
      // here chek the fire button input (gamepad and keyboard)
      if ( DE.Inputs.key( "fire" ) )
        this.fire();
    }

    Game.camera.onMouseClick = function(mouse){
     this.myTarget = {x: mouse.x, y: mouse.y};

     if(!Game.play)
      return;

      this.scene.add( new Bullet( _screenSizes, this, this.myTarget) );
    }
    
    // make bullet
    
    
    var _lastDir = 0, _lastFlip = Date.now(), _flipInterval = 600
      , _flipDelay = 500, _lastCheck = Date.now();
    this.flip = function( dir )
    {
      if ( this.flipping )
        return;
      dir = dir > 0 ? 1 : -1;
      var checkDir = _lastDir
        , checkTime = _lastCheck;
      _lastDir = dir;
      _lastCheck = Date.now();
      if ( dir != checkDir || Date.now() - _lastFlip < _flipInterval
          || Date.now() - checkTime > _flipDelay )
        return;
      _lastFlip = Date.now();
      // do the flip
      var rd = this.renderers[ 0 ];
      rd.isAnimated = true;
      rd.isReversed = dir < 0 ? true : false;
      rd.restartAnim();
      this.flipping = true;
    }
    // on anim end kill the flip
    this.renderers[ 0 ].onAnimEnd = function()
    {
      _self.flipping = false;
      this.setFrame( 0 );
    }
    
    this.lastDamage = Date.now();
    this.damageInterval = 1000;
    
    this.hearts = [];
    this.createGui = function()
    {
     
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
            "fontSize": 32, "font": "Arial Black"
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
        this.renderers[ 0 ].setFrame( 0 );
        _self.trigger( "restart" ); // use trigger method - Game will catch it
      }
      this.gui.add( loose );
      this.gui.add( this.gui.restartBtn );
      this.scene.add( this.gui );
      this.gui.enable = false;
    }
    
    // register down keys to detect a flip intention
    DE.Inputs.on( "keyDown", "left", function(){ _self.flip( -1 ) } );
    DE.Inputs.on( "keyDown", "right", function(){ _self.flip( 1 ) } );
    // when menu is up, check gamePad keys
    DE.Inputs.on( "keyDown", "confirm", function(){
      if ( _self.gui.enable )
        _self.gui.restartBtn.onMouseUp();
    } );
    
    // register axes listeners - we use different than keyboard because keyboard is "left" "right"
    // with gamepad it's just h-axe or v-axe and get the force value
    DE.Inputs.on( "axeMoved", "haxe", function(val){ _self.updateAxes( val, undefined ); } );
    DE.Inputs.on( "axeMoved", "vaxe", function(val){ _self.updateAxes( undefined, val ); } );
    DE.Inputs.on( "axeStop", "haxe", function(){ _self.updateAxes( 0, undefined ); } );
    DE.Inputs.on( "axeStop", "vaxe", function(){ _self.updateAxes( undefined, 0 ); } );
    
    this.addAutomatism( "checkInputs", "checkInputs" );
  };
  
  Player.prototype = new DE.GameObject();
  Player.prototype.constructor = Player;
  Player.prototype.supr        = DE.GameObject.prototype;
  
  Player.prototype.getDamage = function()
  {
    if ( Date.now() - this.lastDamage < this.damageInterval )
      return;
    this.lastDamage = Date.now();
    this.life--;
    if ( this.life < 0 )
    {
      // active loose gui
      this.gui.enable = true;
      // DE.AudioManager.fx.play( "kaboom" );
      this.enable = false;
      return;
    }
    this.hearts[ this.life ].enable = false;
  }
  
  // here update axes, and flip intention
  Player.prototype.updateAxes = function( x, y )
  {
    if ( x != 0 && Math.abs( this.axes.x ) < 0.7 && this.axes.y < 0.5 && Math.abs( x ) > 0.8 )
      this.flip( x );
    this.axes = {
      'x': x !== undefined ? x : this.axes.x
      ,'y': y !== undefined ? y : this.axes.y
    };
  }
  
  return Player;
} );