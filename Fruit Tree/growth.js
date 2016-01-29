'use strict';


function processData(input) {
var parse_fun = function (s) { return parseInt(s, 10); };

var lines = input.split('\n');
//console.log(lines);
var T = parse_fun(lines.shift());
//console.log(T);
var data = lines.splice(0, T).map(parse_fun);
//console.log(data);
// logic here

for (var i = 0; i < T; i++){
    var height = 1;
    if (data[i] === 0){
        console.log(height);
    } else {
       var cycle = data[i];
      for (var j = 1; j <= cycle; j++){
           //console.log(cycle);
           if(j%2 === 1){
               height *= 2;
               //cycle--;
           } else {
               height += 1;
              // cycle--;
           }
       }
       console.log(height);
    }
}
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });