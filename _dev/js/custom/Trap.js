define( ['DREAM_ENGINE'], function(DE)
{
	function Trap(comportement, idCase)
	{
		this.idCase = idCase
		this.width = 117;
		this.heigth = 117;
		this.startpos = {x: 212, y:209};
		this.life = 100;

		DE.GameObject.call(this,
		{
	      "x": startpos.x + ((this.idCase % 8) * this.width),
	      "y": startpos.y + (Math.floor( this.idCase / 8) * this.heigth),
	      "tag": this.comportement,
	      "renderer": new DE.SpriteRenderer( { "spriteName":??????, "startFrame": 0, "scale": ???????? || 1 } ),
	      "collider": new DE.CircleCollider( this.width/2 )
	    });

	    
    	switch(comportement)
		{
			case "hole":
				this.activate = function (zombies)
    			{
    				for (var i = 0; i <= zombies.length; i++) 
    				{
	    				if (DE.CollisionSystem.circleCollision( this.collider, zombies[i].collider )) 
	    				{
	    					zombies[i].life = 0;
	    				}
    				}
    			}
				break;
			case "wall":
				this.activate = function ()
    			{
    				for (var i = 0; i <= zombies.length; i++) 
    				{
	    				if (DE.CollisionSystem.circleCollision( this.collider, zombies[i].collider )) 
	    				{
	    					zombies[i].?????;
	    				}
    				}
    			}
				break;
			case "stab":
				this.activate = function ()
    			{
    				for (var i = 0; i <= zombies.length; i++) 
    				{
	    				if (DE.CollisionSystem.circleCollision( this.collider, zombies[i].collider )) 
	    				{
	    					zombies[i].life --;
	    				}
    				}
    			}
				break;
			case "normal"
				break;
			case default:
				break;
		}
	    

	    this.addAutomatism( "IATrap", "activate" );
	}

	Trap.prototype = new DE.GameObject();
  	Trap.prototype.constructor = Trap;
  	Trap.prototype.supr        = DE.GameObject.prototype;

	return Trap;
});