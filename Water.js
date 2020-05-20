function Water(x, y){
	this.x = x;
	this.y = y;
	this.sprite = game.add.sprite(x, y, 'water');
	this.sprite.anchor.setTo(0.5,0.5);
	waterGroup.add(this.sprite);
	this.destroy = function(){
		this.sprite.destroy();
		waterGroup.remove(this.sprite);
	}
}