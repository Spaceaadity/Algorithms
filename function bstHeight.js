var findHeight(tree){
	if(this.root == null || this.left == null && this.right == null){
		return this;
	};
	var currentRight=this.right;
	var currentLeft=this.left;
	var countL=1;
	var countR=1;
	while(currentLeft!= null){
		if(currentLeft.left && currentLeft.right != null){
			countL+=;
			countR+=;
		}
	}
}