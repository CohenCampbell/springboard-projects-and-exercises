// add whatever parameters you deem necessary
function averagePair(arr, average) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let newAverage = (arr[start] + arr[end]) / 2;
    if (newAverage == average) return true;
    newAverage > average ? end-- : start++;
  }
  return false;
}
