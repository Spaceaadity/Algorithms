function processData(input) {
    //Enter your code here
    var cases = input.split('\n')[0];
   // console.log(cases);
    var answers = [];
    var ontime = 0;
    for (var i = 1; i <= (cases*2); i++){
        //console.log(i);
        //in odd cases of input[i] do:
        if(i%2 === 1){
            var NK = input.split('\n')[i].split(" ").map(Number);
            //console.log(NK);
        } 
        //in even cases of input[i] do:
        else {
           var times = input.split('\n')[i].split(" ").map(Number);  
          // console.log(times);
           for (var j = 0; j < NK[0]; j++){
               if(times[j]<=0){
                   ontime++;
               }
           }
           if (ontime >= NK[1]){
                answers.push('NO');
                ontime = 0;
            } else {
                answers.push('YES');
                ontime = 0;
            }
        }
    }
    for(var k = 0; k < cases; k++){
        console.log(answers[k]);
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
