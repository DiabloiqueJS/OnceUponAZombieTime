/**
* Author
 @Inateno / http://inateno.com / http://dreamirl.com

* ContributorsList
 @Inateno

***
 sample Game - kill the bubble
 there is no "end" and no menus, it's a very lite "how to" for basics
 and you can create complete game with this :)
**/
define( [ 'DREAM_ENGINE', 'Player', 'Enemy', 'datas', 'Trap', 'Castle','DE.GuiLabel' , 'DE.GuiImage'],
function( DE, Player, Enemy, datas, Trap, Castle, GuiLabel, GuiImage)
{
  var Game = {};

  Game.gold = 100;
  
  // init
  Game.init = function()
  {
    console.log( "Engine init" );
    DE.CONFIG.DEBUG_LEVEL = 5; // 5 for all debug
    
    // create render
    Game.render = new DE.Render( "render", { fullScreen: "ratioStretch" } );
    Game.render.init();
    
    // create scene - name it only
    Game.scene = new DE.Scene( "Test" );
    
    // create your camera
    Game.camera = new DE.Camera( Game.screen.w, Game.screen.h, 0, 0, { 'name': "Test zoom 100%", 'backgroundColor': "rgb(50,50,200)" } );
    
    // give a scene at the camera
    Game.camera.scene = Game.scene;
    // bind it on the render
    Game.render.add( Game.camera );
    
    // launch the engine
    DE.start();
  }
  
  Game.screen = { w: 1280, h: 720 };
  // start
  Game.start = function()
  {
    /** Game Button **/
      var gameBtn = new DE.GameObject( {
        "x": Game.screen.w / 2, "y": Game.screen.h / 2 - 50
        , "renderers": [
          new DE.SpriteRenderer( { "spriteName": "btn" } )
          , new DE.TextRenderer( {
            "fontSize": 32, "font": "Arial Black" // not a nice font but just to show you how to :)
          }, 500, 60, DE.LangSystem.get( "play" ) )
        ]
        , "collider": new DE.FixedBoxCollider( 550, 70 )
      } );
      gameBtn.onMouseEnter = function(){ this.renderers[ 0 ].setFrame( 1 ); }
      gameBtn.onMouseLeave = function(){ this.renderers[ 0 ].setFrame( 0 ); }
      gameBtn.onMouseUp = function()
      {
        this.renderers[ 0 ].setFrame( 0 );
        Game.startGame();
      }
      Game.gameBtn = gameBtn;
      Game.scene.add( gameBtn );
      /****/
    /** Bench Button **/
      var benchBtn = new DE.GameObject( {
        "x": Game.screen.w / 2, "y": Game.screen.h / 2 + 50
        , "renderers": [
          new DE.SpriteRenderer( { "spriteName": "btn" } )
          , new DE.TextRenderer( {
            "fontSize": 32, "font": "Arial Black" // not a nice font but just to show you how to :)
          }, 500, 60, DE.LangSystem.get( "benchmark" ) )
        ]
        , "collider": new DE.FixedBoxCollider( 550, 70 )
      } );
      benchBtn.onMouseEnter = function(){ this.renderers[ 0 ].setFrame( 1 ); }
      benchBtn.onMouseLeave = function(){ this.renderers[ 0 ].setFrame( 0 ); }
      benchBtn.onMouseUp = function()
      {
        this.renderers[ 0 ].setFrame( 0 );
        Game.startGame( true );
      }
      Game.benchBtn = benchBtn;
      Game.scene.add( benchBtn );
     /****/
    
   
    //DE.AudioManager.fx.setVolume( 10 );
    setTimeout( function(){ DE.States.down( "isLoading" ); }, 200 );
  };
  
  Game.startGame = function( bench )
  {
    Game.scene.add( new DE.GameObject( { "x": Game.screen.w / 2, "y": Game.screen.h / 2, "z": 3, "renderer": new DE.SpriteRenderer( { "spriteName": "background", "scale": 0.867 } ) } ) );
    Game.castle = new Castle(Game.screen);
    Game.scene.add ( Game.castle);
    Game.castle.init();

    Game.run = true;
    Game.benchmark = bench;
    Game.benchBtn.enable = false;
    Game.gameBtn.enable  = false;
    
    Game.player = new Player( Game.screen );
    Game.scene.add( Game.player );
    Game.player.createGui();
    Game.player.on( "restart", function(){ Game.startGame( Game.benchmark ); } );
    Game.player.enable = false;

    Game.cases = new Array();
    for (var i = 0; i < 60; i++) {
      Game.cases[i] = new Trap("normal", i);
      Game.scene.add(Game.cases[i]);
    };
    

    for ( var n = 0; n < Game.scene.gameObjects.length; ++n )
    {
      if ( Game.scene.gameObjects[ n ].tag.match( "enemy|bullet" ) )
        Game.scene.gameObjects[ n ].askToKill();
    }
    Game.player.init();
    for ( var i in datas.waves )
      datas.waves[ i ].readed = false;
    for ( var i in datas.benchwaves )
      datas.benchwaves[ i ].readed = false;
    _firstCheck = false;
    //start the music oh yeah
    //DE.AudioManager.music.stopAllAndPlay( "music" );
  }
  
  // simple waves spawner
  var _lastCheck = undefined, _firstCheck, _currentWave = undefined;
  Game.checkSpawns = function( time )
  {
    if ( !Game.run )
      return;
    if ( !_firstCheck )
      _firstCheck = time;
    _lastCheck = time;
    
    var waveTime = ( ( _lastCheck - _firstCheck ) / 100 >> 0 ) * 100;
    
    if ( Game.benchmark )
    {
      _currentWave = datas.benchwaves[ waveTime ];
      if ( _currentWave && !_currentWave.readed )
      {
        _currentWave.readed = true;
        for ( var i = 0, e; e = _currentWave.enemies[ i ]; ++i )
        {
          Game.scene.add( new Enemy( Game.screen, e, Game.player ) );
        }
      }
      return;
    }
    _currentWave = datas.waves[ waveTime ];
    if ( _currentWave && !_currentWave.readed )
    {
      _currentWave.readed = true;
      for ( var i = 0, e; e = _currentWave.enemies[ i ]; ++i )
      {
        Game.scene.add( new Enemy( Game.screen, e, Game.player ) );
      }
    }
  }
  
  window.Game = Game; // debug only
  return Game;
} );