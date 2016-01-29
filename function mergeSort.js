function mergeSort(arr1, arr2){
	newarr=[]
	if(arr1 == null){
		return arr2;
	}else if(arr2 == null){
		return arr1;
	};
	while(arr1.length != 0 && arr2.length != 0){
		if(arr1.length && arr2.length){

			if(arr1[0]>arr2[0]){
				newarr.push(arr2.shift());
				// NO! don't push the other value
				// newarr.push(arr1.shift());
			}else{
				newarr.push(arr1.shift());
				// newarr.push(arr2.shift());
			};
		}else if(arr1.length){
			newarr.push(arr1.shift());
		}else{
			newarr.push(arr2.shift());
		}	
	}
	return newarr;
}