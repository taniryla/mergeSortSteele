function mergeSort(arr) {
  // helper recursion for merging 2 sorted arrays
  function helper(idx, left, right, final) {
    let results = [];
    let count = 0; // count increases for each layer of arrays
    let i = 0;
    let j = 0;
    // while there are still values we haven't looked at
    while (i < left.length && j < right.length) {
      // take a look at the smallest values in each input array
      if (left[i] < right[j]) {
        results.push(left[i]);
        i++;
      } else {
        results.push(right[j]);
        j++;
      }
    }
    while (i < left.length) {
      results.push(left[i]);
      i++;
    }
    while (j < right.length) {
      results.push(right[j]);
      j++;
    }
  }
  return results;
}
