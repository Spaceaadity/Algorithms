function BST(){
	//the start of the tree
	this.root = null;
	this.left=null;
	this.right=null;
	//insert node
	var insert = function(value){
		var node = {
			value: value,
			left: null,
			right: null
		};
		//need a current variable to traverse
		var currentNode;
//set up base case for when there are no nodes in the BST set up root node
		if(this.root === null){
			this.root= node;
		}else{
//what to do if the root is set!			
			currentNode = this.root;
			while(currentNode){
				if(value < currentNode.value){
					if(currentNode.left ===null){
						currentNode.left = node;
						return;
					}else{
						currentNode = currentNode.left;
					}
				}else if(value > currentNode.value){
					if(currentNode.right===null){
						currentNode.right = node;
						return;
					}else{
						currentNode = currentNode.right;
					}else{
						return;
					}
				}
			}
		}
	},
	var remove = function(value){
//track wether we have found value
		var found = false;
//create track for parent nodes
		var parentNode = null;
//create current node to traverse
		var currentNode = this.root;
//a var for keeping track of depth
		var depthCount;
//a var to temp hold the node that will be replacing the location of the remove node
		var replaceNode;
//and the var's new parent node temp var
		var replaceParent;
//while there is found and current
	while(!found && currentNode){
		if (value < currentNode.value){
			parentNode = currentNode;
			currentNode = currentNode.left;
		}else if (value > currentNode.value){
			parentNode = currentNode;
			currentNode = currentNode.right;
		}else{
			found = true;
		}
	}
	if(found){
//set up conditions for if the depth is not null but 0 or 1 deep on the right and left
		depthCount = (currentNode.left !== null ? 1 : 0) +
					(currentNode.right !== null ? 1 : 0);
//if the currentNode is still the root
		if (currentNode === this.root){
			//cases of switch dependent upon depth count
			switch(depthCount){
				case 0:
					this.root = null;
					return;
				case 1:
					this.root = (currentNode.right === null ? currentNode.left : currentNode.right);
					return;
// the case for the depth of 2 is more difficult - keep tree balanced
				case 2:
					replaceNode = this.root.left;

					while(replaceNode.right !== null){
						replaceParent = replaceNode;
						replaceNode = replaceNode.right;
					}
					if(replaceParent !== null){
						replaceParent.right = replaceNode.left;
						replaceNode.right = this.root.right;
						replaceNode.left = this.root.left
					}else{
						replaceNode.right = this.root.right
					}
					this.root = replaceNode;	
			} 
		}else{
			swith(depthCount){
				case 0:
					if(currentNode.value < currnt.Node.value){
						parentNode.left = null;
					}else{
						parentNode.right = null;
					}
					return;
				case 1:
					if(currentNode.value < parentNode.value){
						parentNode.left = (currentNode.left === null ? currentNode.right : currentNode.left);
					}else{
						parentNode.right = (currentNode.left === null ? currentNode.right : currentNode.left);
					}
					return;
				case 2:
					replaceNode = currentNode.left;
					replaceParent = currentNode;

					while(replaceNode.right !== null){
						replaceParent = replaceNode;
						replaceNode = replaceNode.right;
					}
					replaceParent.right = replaceNode.left;
					replaceNode.right = currentNode.right;
					replaceNode.left = currentNode.left;
					if(currentNode.value < parentNode.value){
						parentNode.left = replaceNode;
					}else{
						parentNode.right = replaceNode;
					}
			}
		}
	}
	},
	var display = function(){
		
	}
};
