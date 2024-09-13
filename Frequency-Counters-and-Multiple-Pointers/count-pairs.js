// add whatever parameters you deem necessary
function countPairs(arr, num) {
  let sums = 0;
  arr.sort((a, b) => a - b);

  let start = 0;
  let end = arr.length - 1;
  console.log(arr);
  while (end > start) {
    let sum = arr[start] + arr[end];
    if (sum > num) end--;
    if (sum < num) start++;
    if (sum == num) {
      sums++;
      start++;
    }
  }
  return sums;
}
