function evenElement(arr){
    var arrAlt=[];
    for (let i=0;i<arr.length;i=i+2)
    {
        if(i%2==0){
            arrAlt[i/2]=arr[i];
            
        }
    }
    return arrAlt;
}

function oddElement(arr){
    var arrAlt=[];
    for (let i=1;i<arr.length;i=i+2)
    {
        if(i%2!=0){
            arrAlt[Math.floor(i/2)]=arr[i];
            
        }
    }
    return arrAlt;
}

function randomArrayNum(){
    let x = Math.floor((Math.random() * 100)+1);
    var rndArray=[];
    for(let i=0;i<x;i++){
        rndArray[i]= Math.floor(Math.random() * 10);
    }
    return rndArray;
}

function randomArrayAlpha(){
    let x = Math.floor((Math.random() * 100)+1);
    var rndArray=[];
    for(let i=0;i<x;i++){
        rndArray[i]= Math.random().toString(36).slice(2,3);
    }
    return rndArray;
}




//const a=[0,1,2,3,4,5,6,7,8];
const a=randomArrayNum();
console.log("input numeric array= "+a)
console.log("elements at even places in input numeric array= "+ evenElement(a));
console.log("elements at odd places in input numeric array= "+ oddElement(a));

const b=randomArrayAlpha();
console.log("input aplhanumeric array= "+b)
console.log("elements at even places in input aplhanumeric array= "+ evenElement(b));
console.log("elements at odd places in input aplhanumeric array= "+ oddElement(b));