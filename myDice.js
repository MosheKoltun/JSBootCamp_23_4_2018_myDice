function myDice() {
    var myArray=['A','B','C',1,2,3];
    var number = Math.floor(Math.random() * 6);
    var res = myArray[number];
    return res;
}

var res = myDice();
console.log("Result is: %s", res);
