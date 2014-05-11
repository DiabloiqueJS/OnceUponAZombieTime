define( [ 'DE.CONFIG' ]
, function( CONFIG )
{
  var dictionary = {
    "en": {
      "loose"   : "You are dead"
      ,"replay" : "Replay ?"
      ,"play"   : "Play"
      ,"win"   : "Well play, your life and honor are safe!"
    }
    , "fr" : {
      "loose"   : "Vous êtes mort"
      ,"replay" : "Rejouer ?"      
      ,"play"   : "Jouer"
      ,"win"   : "Bien joué!"
    }
  };
  CONFIG.debug.log( "dictionary loaded", 3 );
  return dictionary;
} );