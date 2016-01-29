function processData(input) {
    //Enter your code here
    var inputArr = input.split('\n');
    var dia1 = 0;
    var dia2 = 0;
    for (var i = 1; i <= inputArr[0]; i++){
       inputArr[i] = inputArr[i].split(' ').map(Number);
    }
    for (var j = 0; j < inputArr[0]; j++){
        dia1 += inputArr[j+1][j];
        dia2 += inputArr[inputArr[0]-j][j];
    }
    console.log(Math.abs(dia1-dia2)); 
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