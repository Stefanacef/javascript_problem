// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.


function frankenSplice(arr1, arr2, n) {
  const arrNr = arr2.slice(0, n);
  const arrRest = arr2.slice(n); 
 
  let arr3 = [...arr1, ...arrRest];
  arr3.splice(n-n, 0, ...arrNr);

  return arr3;
}

console.log(
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 1)
);
