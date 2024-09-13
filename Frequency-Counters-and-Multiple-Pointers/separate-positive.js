// add whatever parameters you deem necessary
function separatePositive(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    while (arr[end] <= 0) {
      end--;
    }
    while (arr[start] > 0 && start <= end) {
      start++;
    }
    if (start <= end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
    }
  }

  return arr;
}
