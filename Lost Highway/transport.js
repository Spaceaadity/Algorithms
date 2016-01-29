function processData(input) {
    //Enter your code here
    var cases = input.split('\n')[0].split(" ").map(Number);
    //console.log(cases);
    var widths = input.split('\n')[1].split(" ").map(Number);
    //console.log(widths);
    var data = [];
    //console.log(cases[1]);
    for (var a = 0; a < cases[1]; a++){
        data[a] = input.split('\n')[2+a].split(" ").map(Number);
    }
    //console.log(data);
    
    for (var b = 0; b < data.length; b++){
        var width = 3;
        var segs = data[b];
        //console.log(segs);
        for (var c = segs[0]; c <= segs[1]; c++){
            //console.log(c);
            if(widths[c] < width){
                width = widths[c];
            }
        }
        console.log(width);   
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