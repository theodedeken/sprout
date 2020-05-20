function Leaf(x, y, scale, angle, left){
	//todo translation
	//this.x = scale * 20 +x;
	this.y = y;
	this.scale = scale;
	this.angle = angle;
	this.left = left;
	this.xMod = 1;
	this.sprite = game.add.sprite(x,y, 'leaf');
	this.sprite.scale.setTo(scale, scale);
	leaves.add(this.sprite);
	if (left){
		this.sprite.scale.x *= -1;
		this.xMod = -1;
		this.x -= 20*scale;
		this.sprite.x -= 20*scale;
	}
	else {
		this.x += 25*scale;
		this.sprite.x += 20*scale;
	}
	this.grow = function(amount){
		this.scale += amount;
		this.sprite.scale.setTo(this.xMod * this.scale, this.scale);
		if(left){
			this.x--;
			this.sprite.x--;
		}
		else{
			this.x++;
			this.sprite.x++;
		}
	};
}