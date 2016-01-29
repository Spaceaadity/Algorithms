function processData(input) {
    //Enter your code here
    var sum = 0;
    var lrgArr = input.split("\n")[1].split(" ").map(Number);
    for (var i = 0; i<lrgArr.length; i++){
        sum += lrgArr[i];
    }
    console.log(sum);
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