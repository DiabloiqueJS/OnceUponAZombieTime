define( ['DREAM_ENGINE'], function(DE)
{
	function Trap(comportement, idCase)
	{
		this.idCase = idCase
		this.width = 117;
		this.heigth = 117;
		this.startpos = ;

		DE.GameObject.call(this,
		{
	      "x": startpos + ((this.idCase % 8) * this.width), 
	      "y": startpos + (Math.floor( this.idCase / 8) * this.heigth), 
	      "tag": this.comportement,
	      "renderer": new DE.SpriteRenderer( { "spriteName":??????, "startFrame": 0, "scale": ???????? || 1 } ),
	      "collider": new DE.FixedBoxCollider( this.width, this.heigth )
	    });

		switch(comportement)
		{
			case "hole":
				
				break;
			case "wall":
				
				break;
			case "stab":
				
				break;
			case default:
				break;
		}
	}

	Trap.prototype = new DE.GameObject();
  	Trap.prototype.constructor = Trap;
  	Trap.prototype.supr        = DE.GameObject.prototype;

	return Trap;
});