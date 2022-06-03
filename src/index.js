function mergeSort(arr) {
  // helper recursion for merging 2 sorted arrays
  function helper(idx, left, right, final) {
    let newArr = [];
    let count = 0; // count increases for each layer of arrays
    let i = 0;
    let j = 0;
    // while there are still values we haven't looked at
    while (i < left.length - 1 && j < right.length - 1) {
      // take a look at the smallest values in each input array
      if (left[i + 1] < left[i]) {
        let temp = left[i];
        left[i] = left[i + 1];
        left[i + 1] = temp;
      }
      if (right[j + 1] < right[j]) {
        let temp1 = right[j];
        right[j] = right[j + 1];
        right[j + 1] = temp1;
      }
      if (left[i] < right[j]) {
        newArr.push(left[i]);
        i++;
      } else if (right[j] < left[i] {
        newArr.push(right[j]);
        j++;
      } else {
        // what to do if left and right arrays are not the same size
        newArr.push(left[i] || right[j]);
      }
      helper(count++, left[count], right[count], newArr);
    }
  }
}
