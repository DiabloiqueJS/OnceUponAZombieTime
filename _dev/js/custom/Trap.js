define( ['DREAM_ENGINE'], function(DE)
{
	function Trap(comportement, idCase)
	{
		this.idCase = idCase;
		this.width = 117 * 0.67;
		this.heigth = 117 * 0.67;
		this.startpos = {x: 212 * 0.67, y:209 * 0.67};
		this.life = 100;

		console.log((this.startpos.x + (this.idCase % 8) * this.width) + " " + (this.startpos.y + (Math.floor( this.idCase / 6) * this.heigth)))
		DE.GameObject.call(this,
		{
	      "x": this.startpos.x + ((this.idCase % 8) * this.width),
	      "y": this.startpos.y + (Math.floor( this.idCase / 6) * this.heigth),
	      "tag": this.comportement,
	      "collider": new DE.CircleCollider( this.width/2 )
	    });
	    console.log(this.x + " " + this.y);
	}

	Trap.prototype = new DE.GameObject();
  	Trap.prototype.constructor = Trap;
  	Trap.prototype.supr        = DE.GameObject.prototype;

	return Trap;
});