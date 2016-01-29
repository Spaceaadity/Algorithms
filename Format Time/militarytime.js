function processData(input) {
    //Enter your code here
   // input = '12:00:00PM';
    var hour = input.substr(0, 2);
    var ampm = input.substr(8, 10);
    //console.log(hour);
    //console.log(ampm);
    if (ampm === "PM" && hour !== '12'){
        hour = parseInt(hour);
        hour += 12;
        var newStamp = input.substr(2, 6);
        newStamp = hour + newStamp; 
    } else if (ampm === 'AM' && hour === '12'){
        hour = '00';
        var newStamp = input.substr(2, 6);
        newStamp = hour + newStamp;
    } else if (ampm === 'PM' && input === '12:00:00PM'){
        var newStamp = input;
    } else {
        var newStamp = input.substr(0, 8);
    }
    console.log(newStamp);
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