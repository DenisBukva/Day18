let myArr = []
function* multiplication(x) {
    for(let i = x+1; i >= 0; i-- ) {
        x *= 2;
        yield x; 
        myArr.push(x);
    }  
    return(x);  

        
        
    
}
let num = multiplication(3);
for(let i = 0; i < 3; i++ ) {
    console.log(num.next().value);
    
}
module.exports = multiplication;