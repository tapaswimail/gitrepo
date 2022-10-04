/*
Given an array Arr of N positive integers. Your task is to find the elements whose value is equal to that of its index value ( Consider 1-based indexing ).

Example 1:

Input: 
N = 5
Arr[] = {15, 2, 45, 12, 7}
Output: 2
Explanation: Only Arr[2] = 2 exists here.

Example 2:

Input: 
N = 1
Arr[] = {1}
Output: 1
Explanation: Here Arr[1] = 1 exists.

Your Task:  
You don't need to read input or print anything. Your task is to complete the function valueEqualToIndex() which takes the array of integers arr[] and n as parameters and returns an array of indices where the given conditions are satified. When there is not such element exists then return an empty array of length 0.

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)
Note: There can be more than one element in the array which have same value as their index. You need to include every such element's index. Follows 1-based indexing of the array.

Constraints:
1 ≤ N ≤ 105
1 ≤ Arr[i] ≤ 106
*/

function valueEqualToIndex(arr,N){
    var output=[];
    if (N<=105 && N>=1){
        for (let i=1;i<=N;i++)
        {
            
                if(arr[i-1]==i){
                    output.push(i);
                }
            
            
        }
        var withSpacesOutput=output.join(' ');
        console.log(withSpacesOutput.toString());
        return withSpacesOutput.toString();
         
         
    }
    else {
        console.log("please enter N between 1 and 105");
        return -1;
    }  
}

function randomArrayNum(){
    let x = Math.floor((Math.random() * 100)+1);
    var rndArray=[];
    for(let i=0;i<x;i++){
        rndArray[i]= Math.floor(Math.random() * 10);
    }
    return rndArray;
}

const a = [1,1,2,4,4,7,8,8,9,10,10,12,12];
console.log("input numeric array= "+a)
valueEqualToIndex(a,a.length);

const b = [0,2,3,4,89,6,7];
console.log("input numeric array= "+b)
valueEqualToIndex(b,b.length);

const c = [0,2,6,24,89,63,70];
console.log("input numeric array= "+c)
valueEqualToIndex(c,c.length);

const d = [1];
console.log("input numeric array= "+d)
valueEqualToIndex(d,d.length);

const e = [5,67];
console.log("input numeric array= "+e)
valueEqualToIndex(e,e.length);

const f=randomArrayNum();
console.log("input numeric random array= "+f)
valueEqualToIndex(f,f.length);
