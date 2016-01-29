function processData(input) {
    //Enter your code here
    for (var k = 1; k<=input; k++){
        var output = "";
        for (var i = k; i <input; i++){
            output += " ";
        };
        if (input > output.length){
            var a = input - output.length;
        } else {
            var a = output.length - input;
        };
        for (var j = 1; j <= a; j++){
            output += "#";
        };
        console.log(output);
    };
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