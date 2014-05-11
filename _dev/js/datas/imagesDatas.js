/**
* @ContributorsList
* @Inateno / http://inateno.com / http://dreamirl.com
*
***
*
* @singleton
* imagesList
this is the imagesList will be available in the project.
Please declare in the same way than this example.
To load image as default just set "load" to true.
Otherwhise you can load/add images when you want, load images by calling the DREAM_ENGINE.ImageManager.pushImage function

- [ name, url, extension, 
parameters: load:Bool, totalFrame:Int, totalLine:Int, eachAnim:Int (ms), isAnimated:Bool, isReversed:Bool
] -

All parameters are optionnal but at least an empty object need to be set
**/
define( [ 'DE.CONFIG' ],
function( CONFIG )
{
  var datas = {
    // avalaible images sizes (engine will load optimisest images depends on user resolution)
    screenSizes: [
      { "w": 1920, "h": 1080, "path": "hd/" }
      ,{ "w": 1280, "h": 720, "path": "sd/"}
    ]
    
    // index of the used screen size during game conception
    , conceptionSizeIndex: 1
    
    // images folder name 
    , folderName: "img"
    
    // usage name, real name (can contain subpath), extension, parameters
    , imagesList: [
      [ "ship", "knight-idle", "png", { "load": true, "totalFrame": 5, "eachAnim": 80
        , "isAnimated": true, "isLoop": false } ]
      ,[ "shipatk", "knight-atk", "png", { "load": true, "totalFrame": 5, "eachAnim": 80
        , "isAnimated": true, "isLoop": true } ]
      ,[ "p-fire", "p-fire", "png", { "load": true, "totalFrame": 10, "eachAnim": 40
          , "isAnimated": true, "isLoop": false } ]
      ,[ "enemies", "zombie-walk", "png", { "load": true, "totalFrame": 2, "isAnimated": true, "isLoop": true, "eachAnim": 120 } ]
      ,[ "reactor", "reactor", "png", { "load": true, "totalFrame": 4, "eachAnim": 40
          , "isAnimated": true, "isLoop": true } ]
      ,[ "e-fire", "e-fire", "png", { "load": true, "totalFrame": 4, "eachAnim": 80
          , "isAnimated": true, "isLoop": true } ]
      ,[ "heart", "heart", "png", { "load": true, "totalFrame": 1, "isAnimated": false } ]
      ,[ "bullet", "bullet", "png", { "load": true, "totalFrame": 1, "isAnimated": false } ]
      ,[ "background", "background", "jpg", { "load": true, "totalFrame": 1, "isAnimated": false } ]
      ,[ "stab", "stab", "png", { "load": true, "totalFrame": 1, "isAnimated": false } ]
      ,[ "stabIcon", "stabIcon", "png", { "load": true, "totalFrame": 2, "isAnimated": false } ]
      ,[ "hole", "hole", "png", { "load": true, "totalFrame": 1, "isAnimated": false } ]
      ,[ "holeIcon", "holeIcon", "png", { "load": true, "totalFrame": 2, "isAnimated": false } ]
      ,[ "wall", "wall", "png", { "load": true, "totalFrame": 1, "isAnimated": false } ]
      ,[ "wallIcon", "wallIcon", "png", { "load": true, "totalFrame": 2, "isAnimated": false } ]
      ,[ "closeIcon", "closeIcon", "png", { "load": true, "totalFrame": 2, "isAnimated": false } ]
      ,[ "life", "life", "png", { "load": true, "totalFrame": 1, "isAnimated": false } ]
      ,[ "rien", "gost", "png", { "load": true, "totalFrame": 1, "isAnimated": false } ]
      ,[ "hole", "hole", "png", { "load": true, "totalFrame": 1, "isAnimated": false } ]
      ,[ "stab", "stab", "png", { "load": true, "totalFrame": 1, "isAnimated": false } ]
      ,[ "wall", "wall", "png", { "load": true, "totalFrame": 1, "isAnimated": false } ]
      ,[ "btn", "btn", "png", { "load": true, "totalFrame": 3, "isAnimated": false } ]
    ]
  };
  CONFIG.debug.log( "imagesDatas loaded", 3 );
  return datas;
} );