function processData(input) {
    //Enter your code here
    var data = input.split('\n');
    //console.log(data);
    for (var i = 1; i <= data[0]; i++){
        //console.log(data[i].length);
        var num = data[i];
        var count = 0;
        for (var j = 0; j < num.length; j++){
            //console.log(num%num[j]);
            if(num%num[j] === 0){
                count++;
            }
        }
        console.log(count);
    }
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
