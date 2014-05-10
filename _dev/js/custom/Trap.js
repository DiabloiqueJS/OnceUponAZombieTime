define( ['DREAM_ENGINE'], function(DE)
{
	function Trap(comportement, idCase)
	{
		this.idCase = idCase;
		this.width = 117 * 0.6666666666666666666666666666666666;
		this.heigth = 117 * 0.666666666666666666666666666666666;
		this.startpos = {x: 212 * 0.67, y:209 * 0.6666666666666666666666666666666};
		this.life = 100;

		DE.GameObject.call(this,
		{
	      "x": this.startpos.x + ((this.idCase % 10) * this.width) + this.width / 2,
	      "y": this.startpos.y + (Math.floor( this.idCase / 10) * this.heigth) + this.heigth / 2,
	      "tag": this.comportement,
	      "renderer": new DE.SpriteRenderer( { "spriteName": "heart", "scale": 1 * 0.6666666666666666666 } ),
	      "collider": new DE.CircleCollider( this.width/2 )
	    });
	}

	Trap.prototype = new DE.GameObject();
  	Trap.prototype.constructor = Trap;
  	Trap.prototype.supr        = DE.GameObject.prototype;

	return Trap;
});