function processData(input) {
    //Enter your code here
    //var returned = input.split('\n')[0].replace(/\s/g, "/");
    var returned = input.split('\n')[0].split(" ").map(Number);
    var expected = input.split('\n')[1].split(" ").map(Number);
    if (expected[2] > returned[2]){
        var hackos = 0;
    } else if (expected[1] > returned[1] && expected[2] >= returned[2]){
        var hackos = 0;
    } else if (expected[1] < returned[1] && expected[2] == returned[2]){
        var monthsDiff = returned[1] - expected[1];
        var hackos = monthsDiff * 500;
    } else if (expected[2] < returned[2]){
        var hackos = 10000;
    } else if (expected[0] > returned[0] && expected[1] >= returned[1] && expected[2] >= returned[2]){
        var hackos = 0;
    } else {
        var diffDays = returned[0] - expected[0];
        var hackos = diffDays * 15;
        //var rDate = new Date(returned[2]+"/"+returned[1]+"/"+returned[0]);
        //var eDate = new Date(expected[2]+"/"+expected[1]+"/"+expected[0]);
        //console.log(rDate);
        //console.log(eDate);
        //var timeDiff = Math.abs(rDate.getTime() - eDate.getTime());
        //var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
    }
    console.log(hackos);
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