function processData(input) {
    //Enter your code here
    var inputArr = [];
    inputArr[0]= input.split('\n')[0];
    inputArr[1] = input.split('\n')[1].split(" ").map(Number);
    //console.log(inputArr[1].length);
    var zeros = [];
    var negs = [];
    var posis = [];
    for (var i = 0; i < inputArr[1].length; i++){
        if (inputArr[1][i] === 0){
           zeros.push(inputArr[1][i]);
        } else if (inputArr[1][i] < 0){
           negs.push(inputArr[1][i]);
        } else if (inputArr[1][i] > 0) {
            posis.push(inputArr[1][i]);
        }
    }
    console.log((posis.length/inputArr[0]).toFixed(6));
    console.log((negs.length/inputArr[0]).toFixed(6));
    console.log((zeros.length/inputArr[0]).toFixed(6));
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
