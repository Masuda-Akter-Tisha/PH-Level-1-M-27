function add (num1, num2) {

    console.log('arguments:', arguments, arguments[2], arguments.length);

    // console.log(Array.from (arguments));

    const args = [...arguments]
    console.log('args:', args);
    
    return num1 + num2;
    
}
console.log(add (10, 33, 45, 30));
 