function findSecondLargest(a, n) {
    /*
    Initialize the variable first_largest with the value 0 and second_largest with the value -1.
    */
    let first_largest = 0;
    let second_largest = -1;
  
    /*
    Now update the values of first_largest and second_largest in each iteration as per the approach.
    */
    for (let i = 0; i < n; i++) {
      if (a[i] > a[first_largest]) {
        second_largest = first_largest;
        first_largest = i;
      } else if (a[i] <= a[first_largest]) {
        if (second_largest == -1 || a[second_largest] < a[i]) second_largest = i;
      }
    }
  
    return a[second_largest];
  }
  
  const a = [642,642,642,642,642];
  let n = a.length;
  let answer = findSecondLargest(a, n);
  console.log("The second largest element in the array is: " + answer);
  