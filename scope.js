// Global scope
let price = 100;  //global variable

//  console.log(add (10, 20)); can be used anywhere which is not inside the function

// function/local scope
function add (a, b) {
    const factor = 10;  //local variable
    const result = (a + b)*factor - price;  //local variable

    const result2 = multiply (34);
    console.log(result2);
    
    return result;

}
 console.log(add (10, 20)); //global scope and available throughout the entire programme
   
 function multiply (x) {
    const multi = x*10 + price;
    const value = pi (3.14) + multi;

    function pi (a) {
        const p = a*2;
        return p;
    }
    
    // console.log(pi (3.14));
    
    // return multi;
     return value;

     }
 
 function sub (a,b) {
    // console.log(result); can not access before initialize
    const result = a - b;
    console.log(result);
    return result;
 }
 sub (10, 5);