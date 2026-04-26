let data = 0;
data = 1;
data = '';
data = undefined;
data = null;
data = '0';
data = [];
data = {};

if (data) {
    console.log('truthy');
}
else {
    console.log('falsy');
}

// logical not 
let price = false;
  if (!price) {  // jaita false shaita jenu if block a age dhoke
    console.log('falsy');
    
 }

//  double not
let money = true;
  if (!!money) {  // jaita false shaita jenu if block a age dhoke
    console.log('truthy');
    
 }