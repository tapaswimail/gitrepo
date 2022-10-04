/*
Given an array, rotate the array by one position in clock-wise direction.
 

Example 1:

Input:
N = 5
A[] = {1, 2, 3, 4, 5}
Output:
5 1 2 3 4

 

Example 2:

Input:
N = 8
A[] = {9, 8, 7, 6, 4, 2, 1, 3}
Output:
3 9 8 7 6 4 2 1

 

Your Task:  
You don't need to read input or print anything. Your task is to complete the function rotate() which takes the array A[] and its size N as inputs and modify the array in place.
*/
var jlib = require('./jlib');

function rotate(A,N){
    var output=[];
    for (let i=0;i<N;i++){
        if(i==(N-1)){
            output[0]=A[N-1];
        }
        else{
            output[i+1]=A[i];
        }
        
    }
    console.log("array length "+A.length);
    console.log(output);
    return output;
    
}

const a = [1,1,2,4,4,7,8,8,9,10,10,12,12];
console.log("input numeric array= "+a)
rotate(a,a.length);

const b = [0,2,3,4,89,6,7];
console.log("input numeric array= "+b)
rotate(b,b.length);

const c = [0,2,6,24,89,63,70];
console.log("input numeric array= "+c)
rotate(c,c.length);

const d = [1];
console.log("input numeric array= "+d)
rotate(d,d.length);

const e = [5,67];
console.log("input numeric array= "+e)
rotate(e,e.length);

const f=jlib.rndArrNum();
console.log("input numeric random array= "+f)
rotate(f,f.length);