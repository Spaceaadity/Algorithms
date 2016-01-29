function processData(input) {
    //Enter your code here
    var cases = input.split('\n')[0];
    var tests = [];
    function extractTests(data){
        for(var i = 1; i <= cases; i++){
            tests[i-1] = data.split('\n')[i].split(' ').map(Number);
        }
    }
    //function findOptBonus(wrappers, choconum ,bonusCost){
      //  if(wrappers + choconum < arr[2]){
        //    return;
        //}
        //var bonus = Math.floor(chocolates/bonusCost);
        //findOptBonus(wrappers-; )
        
    //}
    extractTests(input);
    //console.log(tests);
    for (var j = 0; j < tests.length; j++){
        var arr = tests[j];
        var chocolates = Math.floor(arr[0]/arr[1]);
        //console.log(chocolates);
        var bonus = Math.floor(chocolates/arr[2]);
        //console.log(bonus);
        var remains = chocolates - (bonus*arr[2]);
        if (remains + bonus >= arr[2]){
            bonus += Math.floor((remains + bonus)/arr[2]);
        }
        console.log(chocolates += bonus);
        //console.log(chocolates += findOptBonus(remains, bonus, arr[2]));
    }
    //chocolates bought first = MONEY/COST = wrappers
    //bonus = wrappers/wrapcost
    //if bonus has remainder=(wrappers - (bonus * wrapcost))
    //and reminder + bonus >= wrapcost
    //bonus += (remainter + bonus)/wrapcost
    //chocolates += bonus
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
