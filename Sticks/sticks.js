function processData(input) {
    //Enter your code here
    var sticks = input.split('\n')[1].split(' ').map(Number);
    //console.log(sticks);
    function cutSticks(arr){
        if (arr.length === 0 || arr === [] || arr === null){
            return;
        }
        console.log(arr.length);
        var min = arr[0];
        for (var i = 1; i < arr.length; i++){
               if (arr[i] < min){
                   min = arr[i];
               }
        }
        var newarr = [];
        var idx = 0;
        for (var j = 0; j < arr.length; j++){
            arr[j] = arr[j] - min;
            if (arr[j] > 0){
                newarr[idx] = arr[j];
                idx ++;
            }
        }
        cutSticks(newarr);
    }
    cutSticks(sticks);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});