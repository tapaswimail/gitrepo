var counter=function(arr){
return "There are - "+ arr.length + "- elements in this array";
};

var adder = function(a,b){
    return `The sum of two numbers is ${a+b}`;
};

var pi=3.142;

var rndArrNum=function randomArrayNum(){
    let x = Math.floor((Math.random() * 100)+1);
    var rndArray=[];
    for(let i=0;i<x;i++){
        rndArray[i]= Math.floor(Math.random() * 10);
    }
    return rndArray;
}

var rndArrAlpha = function randomArrayAlpha(){
    let x = Math.floor((Math.random() * 100)+1);
    var rndArray=[];
    for(let i=0;i<x;i++){
        rndArray[i]= Math.random().toString(36).slice(2,3);
    }
    return rndArray;
}

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi,
    rndArrNum: rndArrNum,
    rndArrAlpha: rndArrAlpha
};
