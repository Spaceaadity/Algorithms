function processData(input) {
    //Enter your code here
    var N = [];
    N = input.split('\n').map(Number);
    //console.log(N);
    for(var i = 1; i <= N[0]; i++){
        var n = N[i];
        var c = 5*(2*n%3);
        //console.log(c);
        if (c > n){
           //console.log("false "+n) 
            console.log('-1');
        } else {
            //console.log("true "+n)
            var output = '';
            for (var j = 0; j < n-c; j++){
                output += '5';
            }
            for (var k = 0; k < c; k++){
                output += '3';
            }
            console.log(output);
        }
               
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
