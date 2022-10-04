//normal function
function sayHi(){
    console.log('hi');
}

sayHi();

//function expression
var sayBye = function(){
    console.log('Bye');
};

sayBye();

function callF(func){
 func();
}

callF(sayBye);