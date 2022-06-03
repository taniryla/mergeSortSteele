function mergeSort(arr) {
  // helper recursion for merging 2 sorted arrays
  function helper(left, right, newArr) {
    let newArr = [];
    let i = 0;
    let j = 0;
    // while there are still values we haven't looked at
    while (i < left.length - 1 && j < right.length - 1) {
      // take a look at the smallest values in each input array
      if (left[i + 1] < left[i]) {
        let temp = left[i];
        left[i] = left[i + 1];
        left[i + 1] = temp;
        i++;
      } else {
        i++;
      }
      if (right[j + 1] < right[j]) {
        let temp1 = right[j];
        right[j] = right[j + 1];
        right[j + 1] = temp1;
        j++;
      } else {
        j++;
      }
    }
    // what to do if left and right arrays are not the same size
  }
}
