function* myGenerator(){
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
    
}

function* insideGenerator1(){
    for(var i = 1; i <= 5; i++) {
        var x = i;
        yield x;
    }
    return x;
}
function* insideGenerator2(){
    for(var i = 10; i <= 15; i++) {
        var x = i;
        yield x;
    }
    return x;
}
function* insideGenerator3(){
    for(var i = 6; i <= 9; i++) {
        var x = i;
        yield x;
    }
    return x;
}
var iterator = myGenerator();
var fifteenArray = [];
for(var i = 0; i <= 15; i++) {
    var value = iterator.next().value;
    if(typeof value === "undefined"){
        fifteenArray.push(value + "!");
    }    
    else {
        fifteenArray.push(value + "#"); 
       
    }
   
    }
    
    

console.log(fifteenArray);
module.exports = {fifteenArray, myGenerator};