function mergeSort(arr) {
  // helper recursion for merging 2 sorted arrays
  function helper(left, right, finalArr) {
    let newArr = [];
    let i = 0;
    let j = 0;

    while (arr[i].length !== 0 && arr[j].length !== 0) {
      // take a look at the smallest values in each input array
      if (arr[i + 1] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        i++;
      } else {
        i++;
      }
      if (arr[j + 1] < arr[j]) {
        let temp1 = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        j++;
      } else {
        j++;
      }
    }
    // what to do if left and right arrays are not the same size
  }
}
