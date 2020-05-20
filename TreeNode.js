function TreeNode(x, y, scale, angle, color){
	this.x = x;
	this.y = y;
	this.scale = scale;
	this.angle = angle;
	this.color = color;
	this.leftLeaf = null;
	this.rightLeaf = null;
	this.shape = game.add.graphics(x,y);
	this.shape.beginFill(color);
	this.shape.drawCircle(0,0,100);
	this.shape.scale.setTo(scale, scale);
	treeNodes.add(this.shape);
	this.setChild = function(treeNode){
		this.child = treeNode;
	};
	this.getChild = function(){
		return this.child;	
	};
	this.grow = function(amount){
		this.scale += amount;
		point = this.shape.scale;
		point.x += amount;
		point.y += amount;
		for (i = 0; i< 5; i++){
			this.darkenColor();
		}
		if (this.leftLeaf){
			this.leftLeaf.grow(amount);
		}
		if (this.rightLeaf){
			this.rightLeaf.grow(amount);
		}
	};	
	this.setX = function(x){
		this.x = x;
		this.shape.x = x;
	};
	this.setY = function(y){
		this.y = y;
		this.shape.y = y;
	};
	this.setScale = function(scale){
		this.scale = scale;
		this.shape.scale.setTo(scale, scale);
	};
	this.lightenColor = function(){
		if(this.color > 49152){
			this.color -= 65280;
			this.shape.destroy();
			this.shape = game.add.graphics(this.x, this.y);
			this.shape.beginFill(this.color);
			this.shape.drawCircle(0,0,100);
			this.shape.scale.setTo(this.scale, this.scale);
			treeNodes.add(this.shape);
		}
	};
	this.darkenColor = function(){
		if(this.color < 8404992){
			this.color += 65280;
			this.shape.destroy();
			this.shape = game.add.graphics(this.x, this.y);
			this.shape.beginFill(this.color);
			this.shape.drawCircle(0,0,100);
			this.shape.scale.setTo(this.scale, this.scale);
			treeNodes.add(this.shape);
		}		
	};
	this.cartesianDistance = function(x, y){
		return Math.sqrt(Math.pow(this.x-x,2) + Math.pow(this.y-y,2));
	};
	this.collides = function(treeNode){
		return this.scale*50 + treeNode.scale*50 > this.cartesianDistance(treeNode.x, treeNode.y);
	};
	this.pickedUp = function(water){
		return 35 > this.cartesianDistance(water.x, water.y);
	}
	this.growLeaf = function(left){
		if(left && !this.leftLeaf){
			this.leftLeaf = new Leaf(this.x, this.y, this.scale * 2, this.angle, true);
		}
		else if (!this.rightLeaf){
			this.rightLeaf =new Leaf(this.x, this.y, this.scale * 2, this.angle, false);
		}		
	}

}